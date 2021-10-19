import { useEffect, useState } from "react"

const useServices = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        // fetch('./services.json')
        fetch('https://api.jsonbin.io/b/616e383caa02be1d445b65f5')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return { services };
}

export default useServices;