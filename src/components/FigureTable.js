import { GetAllFigures } from '../functions/API';


function FigureTable() {
    let AllFigures = GetAllFigures();
    let figuredata = [];

    for (let index = 0; index < AllFigures.length; index++) {
        figuredata.push(
            <tr>
                <td className='idsender'>{AllFigures[index].id}</td>
                <td>{AllFigures[index].name}</td>
                <td>{AllFigures[index].brand.name}</td>
                <td>{AllFigures[index].manufacturer.name}</td>
                <td>{AllFigures[index].character.name}</td>
                <td>{AllFigures[index].line.name}</td>
                <td>{AllFigures[index].edition.name}</td>
                <td>{AllFigures[index].size}</td>
                <td>{AllFigures[index].scale}</td>
            </tr>
        );
    };
    return (

        <div className='m-5'>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Manufacturer</th>
                        <th>Character</th>
                        <th>Line</th>
                        <th>Edition</th>
                        <th>Size</th>
                        <th>Scale</th>
                    </tr>
                </thead>
                <tbody>
                    {figuredata}
                </tbody>
            </table>
        </div>

    );
}

export default FigureTable;