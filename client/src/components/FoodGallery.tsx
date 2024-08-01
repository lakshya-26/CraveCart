
function FoodGallery() {
    return (
        <div className="grid grid-cols-4 py-12">
            {Array(8)
                .fill(0)
                .map((_, i) => (
                    <div className="w-full overflow-hidden bg-black" key={`foodImage-${i}`}>
                        <img
                            src={`/food/${i + 1}.jpg`}
                            alt=""
                            className="hover:transform scale-110 hover:scale-100 duration-300 opacity-70 hover:opacity-100"
                        />
                    </div>
                ))}
        </div>
    );
}

export default FoodGallery;