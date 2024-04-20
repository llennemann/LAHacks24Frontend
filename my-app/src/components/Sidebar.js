function Sidebar({ data }) {
    return (
        <div id="list-places">
            {data.map(place => (
                <div>
                    <h3>Hello</h3>
                </div>
            ))}
        </div>
    )
}

export default Sidebar;