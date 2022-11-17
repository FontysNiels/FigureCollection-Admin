import { useRef } from 'react';
import {
    GetAllFigures, GetAllBrands, GetAllManufacturers, GetAllCharacters, GetAllLines, GetAllEditions,
    addNewFigure, DeleteFigure, EditFigure,
    GetSpecificFigureImageData, GetSpecificFigureImage,
    AddFigureImage
} from '../functions/API';
import '../App.css';

function FigureEditor() {
    //All Arrays
    let AllFigures = GetAllFigures();
    let AllBrands = GetAllBrands();
    let AllManufacturers = GetAllManufacturers();
    let AllCharacters = GetAllCharacters();
    let AllLines = GetAllLines();
    let AllEditions = GetAllEditions();

    // const DataId = useRef();
    // const DataName = useRef();

    //Figure Input Data
    const figureId = useRef();
    const names = useRef();
    const brands = useRef();
    const Manuf = useRef();
    const Chara = useRef();
    const Lines = useRef();
    const Editions = useRef();
    const Sizes = useRef();
    const Scales = useRef();

    //Selects Options Arrays
    let SelectBrands = [];
    let SelectManufacturers = [];
    let SelectCharacters = [];
    let SelectLines = [];
    let SelectEditions = [];

    //Arrays with All All arrays and All options lists
    let AllAlls = [AllBrands, AllManufacturers, AllCharacters, AllLines, AllEditions];
    let allArrays = [SelectBrands, SelectManufacturers, SelectCharacters, SelectLines, SelectEditions]

    //Fill all option arrays with data from the All arrays
    for (let i = 0; i < AllAlls.length; i++) {
        for (let index = 0; index < AllAlls[i].length; index++) {
            allArrays[i].push(
                <option value={AllAlls[i][index].id}>{AllAlls[i][index].name}</option>
            );
        }
    }
    //Get Data from specific figure and put it in the inputs
    function getFigureData() {
        let ids = parseInt(figureId.current.value);
        for (let index = 0; index < AllFigures.length; index++) {
            if (AllFigures[index].id === ids) {
                names.current.value = AllFigures[index].name;
                brands.current.value = AllFigures[index].brand.id;
                Manuf.current.value = AllFigures[index].manufacturer.id;
                Chara.current.value = AllFigures[index].character.id;
                Lines.current.value = AllFigures[index].line.id;
                Editions.current.value = AllFigures[index].edition.id;
                Sizes.current.value = AllFigures[index].size;
                Scales.current.value = AllFigures[index].scale;
            }
        }
    }
    //Getting the data from the image input
    const fileInput = document.getElementById('ImgInput');
    let data;
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            data = file;
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                document.getElementById('preview').src = base64String;
            };
            reader.readAsDataURL(file);
        });
    }
    //Adds the image to the db with the api call
    function addNewImage() {
        if (figureId.current.value) {
            AddFigureImage(figureId.current.value, data);
        }
    }

    //Prints the images from the figure you wanted the data from
    let getImgData = [];
    let ImgDataResults
    async function PrintImages() {
        ImgDataResults = await getImgData.then(result => result.data);
        document.getElementById('adminpage').innerHTML = "";

        for (let index = 0; index < ImgDataResults.length; index++) {
            GetSpecificFigureImage(ImgDataResults[index].imgData)
        }
    }

    return (
        <div className='m-5 '>
            <div className='row'>
                <div className='col-6'>
                    <input ref={figureId} type='number' className='form-control' id='figId' placeholder='ID....' />
                    <input ref={names} type='text' className='form-control' id='figName' placeholder='NAME....' />
                    <select ref={brands} className="form-select" id='figBrand' aria-label="Default select example">
                        {SelectBrands}
                    </select>
                    <select ref={Manuf} className="form-select" id='figMan' aria-label="Default select example">
                        {SelectManufacturers}
                    </select>
                    <select ref={Chara} className="form-select" id='figChar' aria-label="Default select example">
                        {SelectCharacters}
                    </select>
                    <select ref={Lines} className="form-select" id='figLine' aria-label="Default select example">
                        {SelectLines}
                    </select>
                    <select ref={Editions} className="form-select" id='figEdition' aria-label="Default select example">
                        {SelectEditions}
                    </select>
                    <input ref={Sizes} type='number' className='form-control' defaultValue='0' min='0' id='figSize' placeholder='SIZE....' />
                    <input ref={Scales} type='number' className='form-control' defaultValue='0' min='0' id='figScale' placeholder='SCALE....' />
                    <div className='mt-2'>
                        <button className='btn btn-dark' onClick={() => { getFigureData(); getImgData = GetSpecificFigureImageData(figureId); PrintImages() }}>Get Figure Data</button>
                        <button className='btn btn-success ms-1' onClick={() => addNewFigure(names, brands, Manuf, Chara, Lines, Editions, Sizes, Scales)}>Add Figure</button>
                        <button className='btn btn-warning ms-1' onClick={() => EditFigure(figureId, names, brands, Manuf, Chara, Lines, Editions, Sizes, Scales)}>Edit Figure</button>
                        <button className='btn btn-danger ms-1' onClick={() => DeleteFigure(figureId)}>Delete Figure</button>
                    </div>

                </div>

                <div className='col-6 h-50' >
                    <div id='adminpage'>
                        {/* Hier komen de Images te staan */}
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <input type="file" className='form-control' id='ImgInput' />
                            <button className='btn btn-success w-100 mt-2' onClick={addNewImage}>Add New Image</button>
                        </div>
                        <div className='col-6 text-center'>
                            <img id='preview' className='w-75' alt='' src='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FigureEditor;