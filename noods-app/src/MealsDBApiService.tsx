import * as request from 'request';
// import { Recipe } from './ModelClass/Recipe';

const OPTIONS: any ={
    json: true
};

export class MealsDBApiService {
    getSearchRequest(mealName:string){
        request.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + mealName, OPTIONS, (error: any, response: any, body: any) =>{
            console.log('This is the response: ' + response);
            console.log('This is the body: ' + body);
            console.log('This is the error: ' + error);
        })
    }

    getRandomRequest(){
        request.get('https://www.themealdb.com/api/json/v1/1/random.php', OPTIONS, (error: any, response: any, body: any) =>{
            console.log('This is the response: ' + response);
            console.log('This is the body: ' + body);
            console.log('This is the error: ' + error);
        })
    }
}