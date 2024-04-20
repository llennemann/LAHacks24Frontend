import { useState } from 'react';

function TopBar() {
    const [loc, setLoc] = useState("");
    const [numDays, setNumDays] = useState("");
    const [home, setHome] = useState("");
    const [budget, setBudget] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(loc)
        console.log(numDays)
        console.log(home)
        console.log(budget)
        alert(`The name you entered was: ${loc}`)
    }

    return (
        <nav>
            <form>
                <label>Location?
                    <input
                        type="text"
                        value={loc}
                        onChange={(e) => setLoc(e.target.value)} />
                </label>
                <label>Number of days?
                    <input
                        type="number"
                        value={numDays}
                        onChange={(e) => setNumDays(e.target.value)} />
                </label>
                <label>From?
                    <input
                        type="text"
                        value={home}
                        onChange={(e) => setHome(e.target.value)} />
                </label>
                <label>Budget?
                    <input
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)} />
                </label>
                <input
                    type="submit"
                    onClick={handleSubmit} />
            </form>
        </nav>
    )
}

export default TopBar;