function About ({image = "https://via.placeholder.com/215Links to an external site.", about}) {
    return (
        <div className="about">
            <aside>
                <img src={image} alt="blog logo" />
                <p>{about}</p>
            </aside>
        </div>
        );
}

export default About;