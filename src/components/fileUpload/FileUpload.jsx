import React from 'react';
import Dropzone from 'react-dropzone';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var res;
export class FileUpload extends React.Component {
    constructor (props) {
        super(props);

        this.state = { 
            excelData : [],
            isLoading : true,
            isDataReadinProgress : true,
            dbData : [], 
            resData:[],
            axisData: 'Quarter',
            chartData: 'State',
            State:[],
            Region:[],
            xsData: [],
            dataColumns: [],
            dataset: {},
            isCheckedXAxis:true,
            isCheckedYAxis:true,
            typeOfChart:'line',
            axisDataX:[],
            tableData: []
        };
    }

    onDrop = (acceptedFiles, rejectedFiles) => {
        this.setState({ excelData : [], isLoading : true});

        var opts = { errors : {
            badfile : function() {
              alert('This file does not appear to be a valid Excel file.  If we made a mistake, please send this file to <a href="mailto:saravanakvp1983@gmail.com?subject=I+broke+your+stuff">saravanakvp1983@gmail.com</a> so we can take a look.', function(){});
            },
            pending : function() {
              alert('Please wait until the current file is processed.', function(){});
            },
            large : function(len, cb) {
              confirm("This file is " + len + " bytes and may take a few moments.  Your browser may lock up during this process.  Shall we play?", cb);
            },
            failed : function(e) {
              alert('We unfortunately dropped the ball here.  We noticed some issues with the grid recently, so please test the file using the <a href="/js-xlsx/">raw parser</a>.  If there are issues with the file processor, please send this file to <a href="mailto:saravanakvp1983@gmail.com?subject=I+broke+your+stuff">saravanakvp1983@gmail.com</a> so we can make things right.', function(){});
            },

        } , on : {
                sheet : (json, sheetnames) => {
                    const { chartData, axisData } = this.state;
                    var headerArr = []
                    var jsonObject = [];
                    if(!json) json = [];

                    headerArr = json[0]
                    this.setState({ tableData: json});
                    json.forEach(function(record,rowIndex) {
                        if(rowIndex>1){
                            var obj = {};
                            record.forEach(function(item,colIndex){

                                obj[headerArr[colIndex]] = item;
                            });
							
                            jsonObject.push(obj);
                        }
                    });
                     var inp = jsonObject;
                     console.log(jsonObject);
                     // console.log('inp', inp);
                    this.setState({ excelData : jsonObject, isLoading : false, resData: res});
                    console.log(this.state.excelData);
                    //this.getXAxis(axisData, res);
                    // this.getChartData(chartData, res, xAxisData);
                    //this.getMapData(res);
                    ///this.generateMap();
                }
            }
        };

        var rABS = typeof FileReader !== 'undefined' && FileReader.prototype && FileReader.prototype.readAsBinaryString;
        var f = acceptedFiles[0];
        var reader = new FileReader();

        function fixdata(data) {
            var o = "", l = 0, w = 10240;
            for(; l<data.byteLength/w; ++l)
                o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
            o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(o.length)));
            return o;
        }

        function to_json(workbook) {
            var result = {};
            workbook.SheetNames.forEach(function(sheetName) { 

                var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1});
                if(roa.length > 0) result[sheetName] = roa;
            });
            return result;
        }


        function process_wb(wb, sheetidx) {
            var sheet = wb.SheetNames[sheetidx||0];
            var json = to_json(wb)[sheet];
            opts.on.sheet(json, wb.SheetNames);
        }

        var name = f.name;
        reader.onload = function(e) {
            var data = e.target.result;
            var wb, arr;
            var readtype = {type: rABS ? 'binary' : 'base64' };
            if(!rABS) {
                arr = fixdata(data);
                data = btoa(arr);
            }
            function doit() {
                try {
                    wb = XLSX.read(data, readtype);
                    // console.log(wb);
                    process_wb(wb);
                } catch(e) { console.log(e); opts.errors.failed(e); }
            }

            if(e.target.result.length > 1e6) opts.errors.large(e.target.result.length, function(e) { if(e) doit(); });
            else { doit(); }
        };
        if(rABS) {
            reader.readAsBinaryString(f);
        } else {
            reader.readAsArrayBuffer(f);
        }
    } //onDrop emd here    

    render() {
        let dropzoneRef;
        
        return (
            <div>
                <h1>Application creation wizard</h1>
                <Dropzone ref={(node) => { dropzoneRef = node; }}  onDrop={(files) => this.onDrop(files)} style={{width:'100%', height:'50px', borderWidth: '2px', borderColor: 'rgb(102, 102, 102)', borderStyle: 'dashed', borderRadius: '5px'}}>
                    <div style={{padding:'12px'}}>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
                <div className="col-sm-3">
                    <button className="btn btn-success" type="button"  onClick={() => { dropzoneRef.open() }}>Browse file</button>&nbsp;
                </div>
                {/* <BootstrapTable data={ this.state.tableData } >
                </BootstrapTable> */}
                <BootstrapTable data={this.state.excelData} >
                    <TableHeaderColumn width='70' dataField='S.No' isKey={true}>State</TableHeaderColumn>
                    <TableHeaderColumn width='70' dataField='Name'>StateCode</TableHeaderColumn>
                    <TableHeaderColumn width='180' dataField='TFS Path'>Region</TableHeaderColumn>
                    <TableHeaderColumn width='80' dataField='Bitbucket URL'>Year</TableHeaderColumn>
                    <TableHeaderColumn width='70' dataField='Status'>Quarter</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}