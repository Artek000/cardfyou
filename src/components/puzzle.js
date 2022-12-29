function Puzzle(props) {
    return(
        <a className="puzzle-item" href={props.href}>
            <h3>{props.title}</h3>
            <p>{props.about}</p>
            <svg></svg>
        </a>
    );
}

export default Puzzle;