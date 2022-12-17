
# Ödev 4
## FS File System Modülü
* ### employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
* ### Bu veriyi okuyalım. (READ)
* ### Bu veriyi güncelleyelim. (UPDATE)
* ### Dosyayı silelim. (DELETE)

### index.js
```Javascript
const fs = require('fs')
const file = 'emplooyes.json';
const format = 'utf8';

//CREATE FILE AND ADD DATA
const createFile = () => 
{
    return new Promise((resolve, reject) => 
    {
        fs.writeFile(file,'{"name": "Employee 1 Name", "salary": 2000}',format, (err) =>
        {
            if(err) reject(err);
            resolve('Dosya Oluşturuldu','/n Dosyaya İlk Kayıt İşlendi');
        });
    });    
};

//READ FILE
const readFile = () => 
{
    return new Promise((resolve, reject) => 
    {
        fs.readFile(file,format, (err,data) =>
        {
            if(err) reject(err);
            resolve('Dosya Okundu');
        });
    });    
};

//UPDATE FILE 
const updateFile = () => 
{
    return new Promise((resolve, reject) => 
    {
        fs.readFile(file,format, (err,data) =>
        {
            if(err) reject(err);

            objData = JSON.parse(data);
            objData.name = "Update Employee 1 Name";
            objData.salary = 50000;

            fs.writeFile(file,JSON.stringify(objData),format, (err) =>
            {
                if(err) reject(err);
                resolve('Dosya Değiştirilmek Üzere Okundu \nDosya Güncellendi');
            });
        });
    });    
};


//DELETE FILE
const deleteFile = () => 
{
    return new Promise((resolve, reject) => 
    {
        fs.unlink(file, (err) =>
        {
            if(err) reject(err);
           resolve('Dosya Silindi');
        });
    });    
};

//CALL ALL FUNCTION
createFile()
    .then((returnMessage) => 
    {
        console.log(returnMessage);

        readFile()
            .then((returnMessage) => 
            {
                console.log(returnMessage);

                updateFile()
                    .then((returnMessage) => 
                    {
                        console.log(returnMessage);

                        deleteFile()
                            .then((returnMessage) => 
                            {
                                console.log(returnMessage);
                            })
                    })
            })
    })
    .catch((err)=>
    {
        console.log(err);
    });

```
