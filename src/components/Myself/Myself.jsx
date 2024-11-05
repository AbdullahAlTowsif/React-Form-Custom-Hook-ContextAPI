import Special from "../Special/Special";

const Myself = ({asset}) => {
    return (
        <div>
            <h2>Alen Shopon</h2>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default Myself;