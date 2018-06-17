import React from 'react'
import axios from 'axios';

class LogsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { request: {
            logs : []
          }}
    }
    componentDidMount() {
        axios.post('https://rebelion.com.es/api/logs')
        .then((response) => {
            this.setState({request: {
                logs: response.data
            }})
        })
    }
    render() {
        const logsList = this.state.request.logs.map((log) => {
            return (
                <tr key={log._id}>
                    <th scope="row">{log.headers}</th>
                    <td>{log.createdAt}</td>
                    <td>{log.updatedAt}</td>
                </tr>
            )
        })
        return(
            <div className="logs_container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Header</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Updated at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logsList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LogsContainer