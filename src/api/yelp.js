import axios from "axios";


export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer kZwAT9qBsEi8GeIqi_JyOAPrhDLHwRJDDyDv810GxjyitZBm-37-Noiuc-hhuEGL8E9VT7XZ1A4JIA5sUOAplPJopTZQUwfNRPEUTd7ac-bQF6xvgHdutmwvAohuYnYx"
    }
})