var module = (function () {
    let photoPosts = [
        {
            id: '1',
            description: 'Our greate trip last summer! Great times!!!',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'traveller@introfog',
            photoLink: 'Photos\\pic1.jpg'
        },
        {
            id: '2',
            description: 'What a nice view!!',
            createdAt: new Date('2018-03-23T23:00:00'),
            author: 'traveller@123muzik',
            photoLink: 'Photos\\pic2.jpg'
        },
        {
            id: '3',
            description: 'so much love to mountains',
            createdAt: new Date('2017-10-23T23:00:15'),
            author: 'traveller@winnythepooh',
            photoLink: 'Photos\\pic3.jpg'
        },
        {
            id: '4',
            description: 'Almost jungles!',
            createdAt: new Date('2016-02-23T23:00:00'),
            author: 'traveller@jjhonny',
            photoLink: 'Photos\\pic4.jpg'
        },
        {
            id: '5',
            description: 'Snail. I call him Garry',
            createdAt: new Date('2018-05-23T23:00:00'),
            author: 'traveller@markjh',
            photoLink: 'Photos\\pic5.jpg'
        },
        {
            id: '6',
            description: 'Give me the right direction, Sailor!',
            createdAt: new Date('2018-12-23T23:00:00'),
            author: 'traveller@bingolike',
            photoLink: 'Photos\\pic6.jpg'
        },
        {
            id: '7',
            description: 'Мандариновый закат',
            createdAt: new Date('2018-02-13T23:00:00'),
            author: 'traveller@julia',
            photoLink: 'Photos\\pic7.jpg'
        },
        {
            id: '8',
            description: 'Nightroad to mountains',
            createdAt: new Date('2018-02-23T15:00:00'),
            author: 'traveller@123muzik',
            photoLink: 'Photos\\pic8.jpg'
        },
        {
            id: '9',
            description: 'pinky winter',
            createdAt: new Date('2018-09-23T23:00:00'),
            author: 'traveller@123muzik',
            photoLink: 'Photos\\pic9.jpg'
        },
        {
            id: '10',
            description: 'colorfully grey spb',
            createdAt: new Date('1999-04-27T10:30:01'),
            author: 'traveller@123muzik',
            photoLink: 'Photos\\pic10.jpg'
        },
        {
            id: '11',
            description: 'Sneakers parachuting',
            createdAt: new Date('2010-10-23T23:00:00'),
            author: 'traveller@drgonzo',
            photoLink: 'Photos\\pic11.jpg'
        },
        {
            id: '12',
            description: 'Crazy winter fooking cold',
            createdAt: new Date('2016-02-23T13:34:00'),
            author: 'traveller@gbordello',
            photoLink: 'Photos\\pic12.jpg'
        },
        {
            id: '13',
            description: 'Christofore Columb',
            createdAt: new Date('2018-03-25T13:00:00'),
            author: 'traveller@gunsmaster',
            photoLink: 'Photos\\pic13.jpg'
        },
        {
            id: '14',
            description: 'Good reaction!',
            createdAt: new Date('2017-01-23T23:00:00'),
            author: 'traveller@sugarfree',
            photoLink: 'Photos\\pic14.jpg'
        },
        {
            id: '15',
            description: 'Aligator green!',
            createdAt: new Date('2018-04-23T13:00:00'),
            author: 'traveller@steveee',
            photoLink: 'Photos\\pic15.jpg'
        },
        {
            id: '16',
            description: 'Resty',
            createdAt: new Date('2018-03-12T23:00:00'),
            author: 'traveller@chillingparting',
            photoLink: 'Photos\\pic16.jpg'
        },
        {
            id: '17',
            description: 'Splash!',
            createdAt: new Date('2013-02-01T23:00:00'),
            author: 'traveller@sailor',
            photoLink: 'Photos\\pic17.jpg'
        },
        {
            id: '18',
            description: 'Green boulevar',
            createdAt: new Date('2011-02-23T12:43:00'),
            author: 'traveller@sailor',
            photoLink: 'Photos\\pic18.jpg'
        },
        {
            id: '19',
            description: 'Waterfall miricle',
            createdAt: new Date('2018-03-24T16:00:00'),
            author: 'traveller@advanture',
            photoLink: 'Photos\\pic19.jpg'
        },
        {
            id: '20',
            description: 'Slippery beaty',
            createdAt: new Date('1998-01-26T23:00:00'),
            author: 'traveller@dipsy',
            photoLink: 'Photos\\pic20.jpg'
        }
    ];


    let getPhotoPosts = function (skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;

        let result = [];
        if (filterConfig !== undefined && "author" in filterConfig) {
            photoPosts.forEach(function (value) {
                if (value.author === filterConfig.author) {
                    result.push(value);
                }
            });
        }
        else {
            result = photoPosts.slice();
        }

        result.sort(function (a, b) {
            return b.createdAt - a.createdAt;
        });
        result = result.slice(skip, top);

        return result;
    };

    let getPhotoPost = function (id) {
        return photoPosts.find(function (item) {
            return item.id === id;
        });
    };

    let validatePhotoPost = function (post) {
        if (post === undefined) {
            return false;
        }
        if (!("id" in post && (typeof post.id === "string"))) {
            return false;
        }
        if (!("description" in post && (typeof post.description === "string") && post.description.length < 200)) {
            return false;
        }
        if (!("createdAt" in post && post.createdAt instanceof Date)) {
            return false;
        }
        if (!("author" in post && (typeof post.author === "string"))) {
            return false;
        }
        if (!("photoLink" in post && (typeof post.author === "string"))) {
            return false;
        }

        return true;
    };

    let addPhotoPost = function (post) {
        if (validatePhotoPost(post)) {
            photoPosts.push(post);
            photoPosts.sort(function (a, b) {
                return b.createdAt - a.createdAt;
            });
            return true;
        }
        return false;
    };

    let editPhotoPost = function (id, photoPost) {
        if (!photoPost) {
            return false;
        }

        let result = photoPosts.find(function (item) {
            return item.id === id;
        });

        if (result === null) {
            return false;
        }
        else {
            if ("description" in photoPost && (typeof photoPost.description === "string") && photoPost.description.length < 200) {
                result.description = photoPost.description;
            }
            if ("photoLink" in photoPost && (typeof photoPost.photoLink === "string")) {
                result.photoLink = photoPost.photoLink;
            }
            return true;
        }
    };

    let removePhotoPost = function (id) {
        let result = null;
        photoPosts.forEach(function (item) {
            if (item.id === id) {
                result = item;
            }
        });

        if (result === null) {
            return false;
        }
        else {
            photoPosts.splice(photoPosts.indexOf(result), 1);
            return true;
        }
    };

    return {getPhotoPosts, getPhotoPost, validatePhotoPost, addPhotoPost, editPhotoPost, removePhotoPost};
})();


function run() {
    console.log("\ngetPhotoPosts():\n");
    module.getPhotoPosts().forEach(function (value) {
        console.log(value.id + " \t" + value.createdAt);
    });

    console.log("\ngetPhotoPosts(0, 10, {author: 'traveller@gunsmaster'}):\n");
    module.getPhotoPosts(0, 10, {author: 'traveller@gunsmaster'}).forEach(function (value) {
        console.log(value.author + " " + value.createdAt);
    });

    console.log("\ngetPhotoPost('1')\n");
    let result = module.getPhotoPost('1');
    console.log(result.id + " " + result.author + " " + result.createdAt);

    console.log("\nvalidatePhotoPost\n");
    console.log(module.validatePhotoPost({
        id: '21',
        description: 'rainny',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Victor',
        photoLink: 'Photos\\pic1.jpg'
    }));
    console.log(module.validatePhotoPost({
        id: '21',
        description: 'rainny',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 2,
        photoLink: 'Photos\\pic1.jpg'
    }));

    console.log("\nadd photo post\n");
    module.addPhotoPost({
        id: '21',
        description: 'rainny',
        createdAt: new Date('1890-02-23T23:00:00'),
        author: 'Victor',
        photoLink: 'Photos\\pic1.jpg'
    });
    console.log("After post adding");
    module.getPhotoPosts().forEach(function (value) {
        console.log(value.id + " \t" + value.createdAt);
    });

    console.log("\nedit photo post\n");
    module.editPhotoPost('21', {
        description: "changer description"
    });
    module.getPhotoPosts(0, 1).forEach(function (value) {
        console.log(value.id + " " + value.description);
    });

    console.log("\nremove post\n");
    module.removePhotoPost('4');
}

run();

