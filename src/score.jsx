import React, {useState } from 'react'
import "./score.css"

const Score = () => {
    const [runShow, setRunShow] = useState([]);
    const [runOver, setRunOver] = useState([]);
    const [ball, setBall] = useState(1)
    const [currentRun, setCurrentRun] = useState(0)
    const [wicket, setWicket] = useState(0)
    const [group, setGroup] = useState("groupA")
    const [totalrun, setTotalRun] = useState(0)
    const [over, setOver] = useState(0.0)
    const [totalOver, setTotalOver] = useState(0)
    // const [commantry,setCommantry]= useState(false)

    const handleScore = (run) => {

        if (wicket <= 10) {

            if (ball <= 6) {
                setRunShow([...runShow, run])
                setCurrentRun(currentRun + parseInt(run))

                if (run !== "Wd" && run !== "Nb") {
                    setBall(ball + 1)
                    setOver(totalOver + ball / 10)
                }
            }

            setRunOver([...runOver, `over: ${(over + 0.1).toFixed(1)} - ${run} Runs`])
        }

    }
    const newOver = () => {
        setTotalOver(totalOver + 1)
        setOver(0)
        setBall(1)
        setRunShow([])
        // setCurrentRun(currentRun)
    }
    return (
        <div className="container">

            {
                group === "groupA" ?

                    wicket === 10 || over >= 0.6 ?
                        <div className="centered-content">
                            <div className="score">
                                <h2>Match Score</h2>
                                <h4>Current Score : {currentRun} Runs and {wicket} Wickets</h4>

                                <button onClick={() => {
                                    setTotalRun(currentRun)
                                    setWicket(0)
                                    setCurrentRun(0)
                                    setOver(0)
                                    setTotalOver(0)
                                    setBall(1)
                                    setRunOver([])
                                    setRunShow([])
                                    setOver(0)
                                    setGroup("GroupB")
                                }}>Second Innings</button>
                            </div>
                        </div>
                        :

                        <div className="centered-content">
                            <div className="runShow">
                                {
                                    runShow.map((run, index) => (
                                        <p key={index}>{run}</p>
                                    ))
                                }
                            </div>
                            <div className="run">
                                <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("1")}>1</button>
                                <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("2")}>2</button>
                                <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("3")}>3</button>
                                <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("4")}>4</button>
                                <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("5")}>5</button>
                                <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("6")}>6</button>
                            </div>
                            <div className="guid">
                                <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => {
                                    handleScore("Wd")
                                    setCurrentRun(currentRun + 1)
                                }}>Wide Ball</button>
                                <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => {
                                    handleScore("Nb")
                                    setCurrentRun(currentRun + 1)
                                }}>No Ball</button>
                                <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => {
                                    handleScore("W")
                                    setWicket(wicket + 1)
                                    setCurrentRun(currentRun)
                                }}>Wicket</button>
                                <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("0")}>Dot Ball</button>
                                {ball <= 6 ? "" : <button onClick={newOver}>New Over</button>}
                            </div>

                            <div className="score">
                                <h2>Match Score</h2>
                                <h4>Current Score : {currentRun} Runs and {wicket} Wickets</h4>
                                <h4>over - {over === 0 ? totalOver.toFixed(1) : over.toFixed(1)} / 5.0</h4>
                            </div>
                        </div>

                    :
                    totalrun < currentRun ?
                        <div className="centered-content">{totalrun < currentRun ? <h2>GroupB - Match Winn!! </h2> : <h2> GroupA - Match Winn!! </h2>}</div> :

                        wicket === 10 || over >= 0.6 ?
                            totalrun === currentRun ? <div className="centered-content"><h2>Match tie!! </h2></div> :
                                <div className="centered-content"><h2> GroupA - Match Winn!! </h2></div> :


                            <div className="centered-content">
                                <div className="runShow">
                                    {
                                        runShow.map((run, index) => ( 
                                            <p key={index}>{run}</p>
                                        ))
                                    }
                                </div>
                                <div className="run">
                                    <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("1")}>1</button>
                                    <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("2")}>2</button>
                                    <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("3")}>3</button>
                                    <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("4")}>4</button>
                                    <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("5")}>5</button>
                                    <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("6")}>6</button>
                                </div>
                                <div className="guid">
                                    <button className={ball <= 6 ? "blue-btn" : "black-btn"}
                                        onClick={() => {
                                            handleScore("Wd")
                                            setCurrentRun(currentRun + 1)
                                        }}>Wide Ball</button>
                                    <button className={ball <= 6 ? "blue-btn" : "black-btn"}
                                        onClick={() => {
                                            handleScore("Nb")
                                            setCurrentRun(currentRun + 1)
                                        }}>No Ball</button>
                                    <button className={ball <= 6 ? "blue-btn" : "black-btn"}
                                        onClick={() => {
                                            handleScore("W")
                                            setWicket(wicket + 1)
                                            setCurrentRun(currentRun)
                                        }}>Wicket</button>
                                    <button className={ball <= 6 ? "blue-btn" : "black-btn"} onClick={() => handleScore("0")}>Dot Ball</button>
                                    {ball <= 6 ? "" : <button onClick={newOver}>New Over</button>}
                                </div>

                                <div className="score">
                                    <h2>Match Score</h2>
                                    <h4>Current Score : {currentRun} Runs and {wicket} Wickets</h4>
                                    <h4>over - {over === 0 ? totalOver.toFixed(1) : over.toFixed(1)} / 5.0</h4>
                                </div>
                            </div>

            }
            {
                currentRun?
                    <div className="comantry centered-content">
                        <h2>Commantry</h2>
                        <h4>{group}</h4>

                        {
                            runOver.map((run, index) => (
                                <div className='list-run' key={index}>
                                    <li>{run}</li>
                                </div>
                            ))

                        }
                    </div>
                    :
                    ""
            }
        </div>
    )
}

export default Score