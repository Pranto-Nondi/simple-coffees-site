import { Link } from "react-router-dom";


const CofeeCard = ({ coffee }) => {
    const {  name, quantity, supplier, taste, photo } = coffee
    return (
        <div className="card card-side bg-base-100 shadow-xl ">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link >
                            <button className="btn">Edit</button>
                        </Link>
                        <button
                           
                            className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CofeeCard;