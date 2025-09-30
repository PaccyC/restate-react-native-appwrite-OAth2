import {  Account, Avatars, Client, Databases, OAuthProvider, Query} from 'react-native-appwrite'
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';


export const config={
    platform:"com.paccy.restate",
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
      databaseId: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
    agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
    reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
    galleriesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
    propertiesCollectionId: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
}


export const client= new Client();

client
.setEndpoint(config.endpoint!)
.setProject(config.projectId!)
.setPlatform(config.platform!)


export const  avatar= new Avatars(client);
export const account= new Account(client);
export const databases= new Databases(client)


export async function login() {
    try {
        const redirectUri=Linking.createURL("/");
        const response= await account.createOAuth2Token(OAuthProvider.Google,redirectUri);
        if(!response){ 
            throw new Error("Failed to login")
        }

        const browserResult=await WebBrowser.openAuthSessionAsync(
            response.toString(),
            redirectUri
        )
        if(browserResult.type !== "success") throw new Error("Failed to login");

        const url = new URL(browserResult.url);
        const secret= url.searchParams.get("secret")?.toString();
        const userId= url.searchParams.get("userId")?.toString();

        if(!secret || !userId) throw new Error("Failed to login");

        const session= await account.createSession(userId,secret);
        if(!session) throw new Error("Failed to create a sessiion");
        return true;
    } catch (error) {
         console.error(error);
         return false;

         
    }
    
}

export async function logout() {
    try {
        
        await account.deleteSession("current");
        return true;
    } catch (error) {
        console.error(error);
        return false;
        
    }
    
}

export async function getCurretUser() {
    try {
        
        const response=await account.get();
        if(!response.$id){
            const userAvatar=  avatar.getInitials(response.name)
            return {...response,
                avatar:userAvatar.toString()
            }
        }
        return response;
    } catch (error) {
        console.error(error);
        return false;
        
    }
    
}

export const getLatestProperties = async()=>{
    try {
        
        const result= await databases.listDocuments(
            config.databaseId!,
            config.propertiesCollectionId!,
            [Query.orderAsc("$createdAt"), Query.limit(10)]
        ) ;
        return result.documents
    } catch (error) {
        console.error(error)
        return [];
    }

}

export const getProperties= async({query,limit,filter}:{query?:string,limit?:number,filter?:string})=>{
    try {
        const baseQuery= [Query.orderAsc("$createdAt")];

        if(filter && filter !== "All"){
            baseQuery.push(Query.equal("type",filter))
        }

        if(query){
            baseQuery.push(
                Query.search("type",query),
                Query.search("title",query),
                Query.search("address",query)
            )
        }
        if(limit) baseQuery.push(Query.limit(limit))

             const result= await databases.listDocuments(
            config.databaseId!,
            config.propertiesCollectionId!,
            baseQuery
        ) ;
        return result.documents
        
    } catch (error) {
        console.error(error);
        return[]
    }

}