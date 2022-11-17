import { GetAllBrands, GetAllManufacturers, GetAllCharacters, GetAllLines, GetAllEditions } from '../functions/API';
import '../App.css';

function ComponentTable() {
    //All Arrays
    let AllBrands = GetAllBrands();
    let AllManufacturers = GetAllManufacturers();
    let AllCharacters = GetAllCharacters();
    let AllLines = GetAllLines();
    let AllEditions = GetAllEditions();

    //Selects Options Arrays
    let TableBrands = [];
    let TableManufacturers = [];
    let TableCharacters = [];
    let TableLines = [];
    let TableEditions = [];

    //Arrays with All All arrays and All table data lists
    let AllAlls = [AllBrands, AllManufacturers, AllCharacters, AllLines, AllEditions];
    let allArrays = [TableBrands, TableManufacturers, TableCharacters, TableLines, TableEditions]
    let CarouselData = [];
    //Fill all tabledata arrays with data from the All arrays
    for (let i = 0; i < AllAlls.length; i++) {
        for (let index = 0; index < AllAlls[i].length; index++) {
            allArrays[i].push(
                <tr>
                    <td>{AllAlls[i][index].id}</td>
                    <td>{AllAlls[i][index].name}</td>
                </tr>
            );
        }
    }

    //Fill all table data arrays with data from the All arrays
    for (let i = 0; i < AllAlls.length; i++) {
        if (i === 0) {
            CarouselData.push(
                <div class="carousel-item active">
                    <table className="table table-striped table-dark w-75 mx-auto float-start">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allArrays[i]}
                        </tbody>
                    </table>
                </div>
            );
        }
        else {
            CarouselData.push(
                <div class="carousel-item">
                    <table className="table table-striped table-dark w-75 mx-auto float-start">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allArrays[i]}
                        </tbody>
                    </table>
                </div>
            );
        }

    }



    return CarouselData;
}

export default ComponentTable;