
# Ödev 2 
## Post Sıralama ve Post Ekleme
### Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.


```Javascript
//OBJECT
const posts = 
[
    {title: "Post 1", body: "Post içerik 1"},
    {title: "Post 2", body: "Post içerik 2"},
    {title: "Post 3", body: "Post içerik 3"}
];

//getPosts FUNCTION
const getPosts = () => 
{
    posts.map((post) => 
    {
        console.log(post);
    })
};

//FIRST getPosts INVOKE
console.log("İlk Post Listesi ;");
getPosts();

/**********************/
/* ASYNC AWAIT METHOD */
/**********************/
//ADD FUNCTION
const addPost = (post) => 
{
    let returnConsole = "Post Başarı ile Eklendi";

    if(!posts.push(post))
        returnConsole = "Post Eklenemedi";

    console.log(returnConsole);
};

//PROCESSDATA FUNCTION
async function processData()
{
    try 
    {
        await addPost({ title: "Post 4", body: "Post içerik 4" });
        console.log("Güncel Tüm Postlar;");
        getPosts();
    } 
    catch (err) 
    {
        console.log("İşlem Başarısız");
    }
}
//PROCESSDATA INVOKE
processData();

/*******************/
/* CALLBACK METHOD */
/*******************
//ADD FUNCTION
const addPost = (post, callback) => 
{
    let returnConsole = "Post Başarı ile Eklendi";

    if(!posts.push(post))
        returnConsole = "Post eklenemedi";

    console.log(returnConsole);
    console.log('Güncel Tüm Postlar;');
    callback();
};

//ADD AND GETALL INVOKE
addPost({ title: "Post 4", body: "Post içerik 3" }, getPosts);


/******************/
/* PROMISE METHOD */
/*******************
//ADD FUNCTION
const addPost = (post) => 
{
    const promise = new Promise((resolve, reject) => 
    {
        posts.push(post)

        resolve("Post Başarı ile Eklendi");
        reject("Post Eklenemedi");
    });    
    return promise;
};

//ADD AND GETALL INVOKE
addPost({ title: "Post 4", body: "Post içerik 4" })
    .then((val) => 
    {
        console.log(val);
        console.log('Güncel Tüm Postlar;');
        getPosts();
    })
    .catch((err)=>
    {
        console.log(err);
    });

/*******************************************/

```
