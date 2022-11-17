import { useEffect, useState } from 'react';
import axios from 'axios';

export const GetAllFigures = () => {

    let url = 'https://localhost:7281/api/Figures';
    const [figures, setFigures] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setFigures(response.data)
            })
    }, [url])

    return figures;
}
//Get Other Data (Connected to Figure)
export const GetAllBrands = () => {

    let url = 'https://localhost:7281/api/Brands';
    const [Brands, setFigures] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setFigures(response.data)
            })
    }, [url])

    return Brands;
}
export const GetAllManufacturers = () => {

    let url = 'https://localhost:7281/api/Manufacturers';
    const [Manufacturers, setFigures] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setFigures(response.data)
            })
    }, [url])

    return Manufacturers;
}
export const GetAllCharacters = () => {

    let url = 'https://localhost:7281/api/Characters';
    const [Characters, setFigures] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setFigures(response.data)
            })
    }, [url])

    return Characters;
}
export const GetAllLines = () => {

    let url = 'https://localhost:7281/api/Lines';
    const [Lines, setFigures] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setFigures(response.data)
            })
    }, [url])

    return Lines;
}
export const GetAllEditions = () => {

    let url = 'https://localhost:7281/api/Editions';
    const [Editions, setFigures] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setFigures(response.data)
            })
    }, [url])

    return Editions;
}

export const addNewFigure = (names, brands, Manuf, Chara, Lines, Editions, Sizes, Scales) => {

    let url = 'https://localhost:7281/api/Figures';
    axios.post(url, {
        name: names.current.value,
        brand: {
            id: brands.current.value
        },
        manufacturer: {
            id: Manuf.current.value
        },
        character: {
            id: Chara.current.value
        },
        line: {
            id: Lines.current.value
        },
        edition: {
            id: Editions.current.value
        },
        size: Sizes.current.value,
        scale: Scales.current.value
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    window.location.reload();
}
export const EditFigure = (figureId, names, brands, Manuf, Chara, Lines, Editions, Sizes, Scales) => {

    let url = 'https://localhost:7281/api/Figures';
    axios.put(url, {
        id: figureId.current.value,
        name: names.current.value,
        brand: {
            id: brands.current.value
        },
        manufacturer: {
            id: Manuf.current.value
        },
        character: {
            id: Chara.current.value
        },
        line: {
            id: Lines.current.value
        },
        edition: {
            id: Editions.current.value
        },
        size: Sizes.current.value,
        scale: Scales.current.value
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    window.location.reload();
}
export const DeleteFigure = (figureId) => {
    let url = 'https://localhost:7281/api/Figures/' + figureId.current.value;
    axios.delete(url)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    window.location.reload();
}

export const GetSpecificFigureImageData = (figureId) => {
    let url = 'https://localhost:7281/api/FigureImages/' + figureId.current.value;
    return axios.get(url);
}
export const GetSpecificFigureImage = (ImageName) => {
    //zou een blob moeten terug sturen....
    let url = 'https://localhost:7281/api/FigureImages/imagename/' + ImageName;

    axios.get(url,
        {
            responseType: 'arraybuffer'
        })
        .then(response => {
            let blob = new Blob(
                [response.data],
                { type: response.headers['content-type'] }
            )
            let imagesrc = URL.createObjectURL(blob);

            const image = document.createElement('img');
            const adminPreview = document.getElementById('adminpage');

            image.setAttribute(
                'src',
                imagesrc,
            );

            image.className = " w-25 ";
            adminPreview.appendChild(image);

        })
}
export const AddFigureImage = (id, selectedFile) => {

    let formData = new FormData();
    formData.append("fileName", selectedFile.name);
    formData.append("file", selectedFile);
    console.log(selectedFile)
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    axios.post(
        'https://localhost:7281/api/FigureImages/' + id,
        formData,
        config
    ).then(function (response) {
        console.log(response);
        window.location.reload();
    }).catch(function (error) {
        console.log("Eroor!" + error);
    });
}


export const addNewBrand = (urlHelper, DataName) => {
        
    let url = 'https://localhost:7281/api/' + urlHelper;
    axios.post(url, {
        name: DataName.current.value
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    window.location.reload();
}
export const EditNewBrand = (urlHelper, DataId, DataName) => {
    let url = 'https://localhost:7281/api/' + urlHelper;
    axios.put(url, {
        id: DataId.current.value,
        name: DataName.current.value
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

    window.location.reload();
}
export const DeleteNewBrand = (urlHelper, DataId) => {
    let url = 'https://localhost:7281/api/' + urlHelper + '/' + DataId.current.value;
    axios.delete(url)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    window.location.reload();
}