import { useRef } from 'react';
import {
    addNewBrand, EditNewBrand, DeleteNewBrand
} from '../functions/API';
import '../App.css';
import ComponentTable from './ComponentTable';

function ComponentEditor() {
    
    const DataId = useRef();
    const DataName = useRef();

    let arrayofnames = ["Brands", "Manufacturers", "Characters", "Lines", "Editions"]
    let count = 0;
    let TableName = document.getElementById('tabName');
    
    function PrevComponent() {
        TableName = document.getElementById('tabName');
        if (count === 0) {
            count = arrayofnames.length - 1;
            TableName.innerHTML = arrayofnames[count]
        }
        else {
            count--;
            TableName.innerHTML = arrayofnames[count]
        }
    }

    function NextComponent() {
        TableName = document.getElementById('tabName');
        if (count === arrayofnames.length - 1) {
            count = 0;
            TableName.innerHTML = arrayofnames[count]
        }
        else {
            count++;
            TableName.innerHTML = arrayofnames[count]
        }
    }

    return (
        <div className='row m-5 mt-0'>
            <div className='col-6 '>
                <div className='w-100'>
                    <div class="input-group mb-3 ms-1 w-75">
                        <input ref={DataId} type='text' className='form-control' placeholder='ID' />
                        <input ref={DataName} type='text' className='form-control w-75' id='namesender' placeholder='NAME' />
                    </div>
                </div>
                <div className='w-100'>
                    <button className='btn btn-success mt-1 ms-1 w-25' onClick={() => addNewBrand('Brands', DataName)}>Add Brand</button>
                    <button className='btn btn-warning mt-1 ms-1 w-25' onClick={() => EditNewBrand('Brands', DataId, DataName)}>Edit Brand</button>
                    <button className='btn btn-danger mt-1 ms-1 w-25' onClick={() => DeleteNewBrand('Brands', DataId)}>Delete Brand</button>
                    <br />
                    <button className='btn btn-success ms-1 mt-2 w-25' onClick={() => addNewBrand('Manufacturers', DataName)}>Add Manufacturer</button>
                    <button className='btn btn-warning mt-1 ms-1 w-25' onClick={() => EditNewBrand('Manufacturers', DataId, DataName)}>Edit Manufacturer</button>
                    <button className='btn btn-danger mt-1 ms-1 w-25' onClick={() => DeleteNewBrand('Manufacturers', DataId)}>Delete Manufacturer</button>
                    <br />
                    <button className='btn btn-success ms-1 mt-2 w-25' onClick={() => addNewBrand('Characters', DataName)}>Add Character</button>
                    <button className='btn btn-warning mt-1 ms-1 w-25' onClick={() => EditNewBrand('Characters', DataId, DataName)}>Edit Character</button>
                    <button className='btn btn-danger mt-1 ms-1 w-25' onClick={() => DeleteNewBrand('Characters', DataId)}>Delete Character</button>
                    <br />
                    <button className='btn btn-success ms-1 mt-2 w-25' onClick={() => addNewBrand('Lines', DataName)}>Add Line</button>
                    <button className='btn btn-warning mt-1 ms-1 w-25' onClick={() => EditNewBrand('Lines', DataId, DataName)}>Edit Line</button>
                    <button className='btn btn-danger mt-1 ms-1 w-25' onClick={() => DeleteNewBrand('Lines', DataId)}>Delete Line</button>
                    <br />
                    <button className='btn btn-success ms-1 mt-2 w-25' onClick={() => addNewBrand('Editions', DataName)}>Add Edition</button>
                    <button className='btn btn-warning mt-1 ms-1 w-25' onClick={() => EditNewBrand('Editions', DataId, DataName)}>Edit Edition</button>
                    <button className='btn btn-danger mt-1 ms-1 w-25' onClick={() => DeleteNewBrand('Editions', DataId)}>Delete Edition</button>
                </div>
            </div>
            <div className='col-6'>
                <button className="btn btn-success carousel-control-prev-icon" onClick={() => { document.getElementById('CarouselBack').click(); PrevComponent();}}></button>
                <span className='m-5 fw-bold' id='tabName'>{arrayofnames[count]}</span>
                <button className="btn btn-success carousel-control-next-icon ml-3" onClick={() => { document.getElementById('CarouselNext').click(); NextComponent();}}></button>

                <div id="carouselExampleControls" className="carousel slide" >
                    <div className="carousel-inner" >
                        <ComponentTable />

                        <div>
                            <button className="carousel-control-prev" type="button" id='CarouselBack' data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            </button>

                            <button className="carousel-control-next" type="button" id='CarouselNext' data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default ComponentEditor;