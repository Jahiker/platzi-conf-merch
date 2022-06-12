import { useState, useEffect } from "react";
import axios from 'axios';

const useAddress = () => {
    const [map, setMap] = useState({});

    useEffect(() => {
        const fetchLocation = () => {
            const ipInfo = axios('https://jsonip.com?callback')
                .then(resp => {
                    const location = axios(`https://ipinfo.io/${resp.data.ip}/json?token=82ba83d896facf`)
                    .then(data => {

                        const loc = data.data.loc.split(',');

                        data.data.loc = loc

                        setMap(data.data);  
                    })

                })

        }

        const location = fetchLocation();

    }, [])

    return map;

}

export default useAddress;