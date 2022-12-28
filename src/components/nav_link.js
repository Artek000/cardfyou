function Nav_link(props) {
    return(
        <div className="nav-link">
            <a href={props.href} title={props.name}>
                <span>
                    {props.name}
                </span>
            </a>
        </div>
    );
}

export default Nav_link;