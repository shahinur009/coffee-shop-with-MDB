import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Add Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className="bg-[#F4F3F0] p-28">
            <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row 1st */}
                <div className="md:flex gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="join">
                            <input type="text" placeholder="Coffee Name" name="name" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="join">
                            <input type="text" placeholder="Available Quantity" name="quantity" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 2nd */}
                <div className="md:flex gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="join">
                            <input type="text" placeholder="Supplier" name="supplier" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="join">
                            <input type="text" placeholder="Taste" name="taste" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 3rd */}
                <div className="md:flex gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="join">
                            <input type="text" placeholder="Category" name="category" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="join">
                            <input type="text" placeholder="Details" name="details" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 4th */}
                <div className="gap-10 mb-6">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="join">
                            <input type="text" placeholder="Photo" name="photo" id="" className="input input-bordered w-full py-2" />
                        </label>
                    </div>
                </div>
                <input type="Submit" className="btn bg-slate-500 text-orange-600 btn-block font-bold text-xl" name="" value="Add Coffee" id="" />
            </form>
        </div>
    );
};

export default AddCoffee;