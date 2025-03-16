

const Experience = () => {
    return (
        <div className="flex w-6/12 mx-auto my-20 gap-20 border-spacing-5 bg-pink-300 p-4">
            <img className="w-[]" src="https://i.ibb.co.com/gbh2k8JW/images.jpg"></img>
            <div>
                <h1 className="text-center text-2xl font-bold my-4">Subscribe Our NewsLetter</h1>
                <p>Subscribe our newsletter for getting regular <br></br>
                    tips and tricks for your pets</p>
                <div className="join my-10">
                    <input className="input join-item" placeholder="Enter Your Email" />
                    <button className="btn join-item rounded-r-full bg-lime-200">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Experience;


