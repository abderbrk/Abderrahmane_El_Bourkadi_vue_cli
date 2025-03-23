<template>
    <div>
        <p>Add a new job</p>
        <form>
            <label for="titre">Titre:</label>
            <input id="titre" type="text" v-model="title"> <br><br>
            <label for="desc">Description:</label>
            <input id="desc" type="text" v-model="description"> <br><br>
            <label for="sal">Salaire:</label>
            <input id="sal" type="text" v-model="salary"> <br><br>
            <label for="date">Date de creation:</label>
            <input id="date" type="text" v-model="date"> <br><br>
            <input type="submit" value="add job" @click.prevent="add">
        </form>
        
    </div>
</template>

<script>
//import jsonjobs from '/src/json/jobs.json'



export default {
    name:'AddJob',
    data(){
        
        return{
            
            title:'',
            description:'',
            salary:'',
            date:''
         }
    },
    methods:{
        add(){
            let JSON_Object={
                "id": "500",
                "titre": this.title,
                "description":this.description,
                "salaire": this.salary,
                "date de création": this.date
            };
            fetch('http://localhost:3000/jobs',{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body:JSON.stringify(JSON_Object)
            })
            this.title=''
            this.salary=''
            this.description=''
            this.date=''

            
        }
    }
}
    

</script>

<style>

</style>