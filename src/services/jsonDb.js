class jsonDb {
    constructor(dbUrl){
        this.url = dbUrl;
    }

    async postData(data){
        const result = await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:data
        });
        return await result.json();
    }

    async getJsonData (){
        const result = await fetch(this.url);
        if(!result.ok)
            throw new Error(`Could not fetch ${this.url}, status ${result.status}`);
        
        return await result.json();
    }

    async deleteData(id){
        const result = await fetch(this.url + `/${id}`, {
            method: "DELETE"
        });
        return await result.json();
    }
}

export default jsonDb;