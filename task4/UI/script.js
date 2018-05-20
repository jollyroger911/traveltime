var module =(function(){
var photoPosts =[
  {
    id: '1',
    descriprion: 'Our greate trip last summer! Great times!!!',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'traveller@introfog',
    photoLink: 'Photos\\pic1.jpg'
   },

   {
    id: "2",
	descriprion: "What a nice view!!",
    createdAt: new Date ("2018-02-12T17:22:00"),
	author: "traveller@123muzik",
	photoLink: "Photos\\pic2.jpg"
   },
	{
    id: '3',
	descriprion: "so much love to mountains",
    createdAt: new Date ("2018-02-13T17:12:00"),
	author: "traveller@winnythepooh",
	photoLink: "Photos\\pic3.jpg"
   },
    {
    id: '4',
	descriprion: "Almost jungles!",
    createdAt: new Date ("2018-03-11T15:22:00"),
	author: "traveller@jjhonny",
	photoLink: "Photos\\pic4.jpg"
   },
    {
    id: '5',
	descriprion: "Snail. I call him Garry",
    createdAt: new Date ("2018-03-12T13:22:00"),
	author: "traveller@markjh",
	photoLink: "Photos\\pic5.jpg"
   },
    {
    id: '6',
	descriprion: "Give me the right direction, Sailor!",
    createdAt: new Date ("2018-03-13T10:20:00"),
	author: "traveller@bingolike",
	photoLink: "Photos\\pic6.jpg"
   },
    {
    id: '7',
	descriprion: "Мандариновый закат",
    createdAt: new Date ("2018-03-14T10:24:00"),
	author: "traveller@julia",
	photoLink: "Photos\\pic7.jpg"
   },
    {
    id: '8',
	descriprion: "Nightroad to mountains",
    createdAt: new Date ("2018-03-14T14:22:00"),
	author: "traveller@123muzik",
	photoLink: "Photos\\pic8.jpg"
   },
    {
    id: '9',
	descriprion: "pinky winter",
    createdAt: new Date ("2018-03-14T16:32:00"),
	author: "traveller@123muzik",
	photoLink: "Photos\\pic9.jpg"
   },
    {
    id: '10',
	descriprion: "colorfully grey spb",
    createdAt: new Date ("2018-03-15T11:53:00"),
	author: "traveller@123muzik",
	photoLink: "Photos\\pic10.jpg"
   },
    {
    id: '11',
	descriprion: "Sneakers parachuting",
    createdAt: new Date ("2018-03-15T11:55:00"),
	author: "explorer@drgonzo",
	photoLink: "Photos\\pic11.jpg"
   },
    {
    id: '12',
	descriprion: "Crazy winter fooking cold",
    createdAt: new Date ("2018-03-15T11:53:00"),
	author: "traveller@gbordello",
	photoLink: "Photos\\pic12.jpg"
   },
    {
    id: '13',
	descriprion: "Christofore Columb",
    createdAt: new Date ("2018-03-16T11:54:00"),
	author: "traveller@gunsmaster",
	photoLink: "Photos\\pic13.jpg"
   },
    {
    id: '14',
	descriprion: "Good reaction!",
    createdAt: new Date ("2018-03-16T11:52:00"),
	author: "traveller@sugarfree",
	photoLink: "Photos\\pic14.jpg"
   },
    {
    id: '15',
	descriprion: "Aligator!",
    createdAt: new Date ("2018-03-16T12:53:00"),
	author: "traveller@steveee",
	photoLink: "Photos\\pic15.jpg"
   },
    {
    id: '16',
	descriprion: "Resty",
    createdAt: new Date ("2018-03-16T13:57:00"),
	author: "traveller@chillingparting",
	photoLink: "Photos\\pic16.jpg"
   },
    {
    id: '17',
	descriprion: "Splash!",
    createdAt: new Date ("2018-03-16T14:58:00"),
	author: "traveller@sailor",
	photoLink: "Photos\\pic17.jpg"
   },
    {
    id: '18',
	descriprion: "Green boulevar",
    createdAt: new Date ("2018-03-16T16:19:00"),
	author: "traveller@sailor",
	photoLink: "Photos\\pic18.jpg"
   },
    {
    id: '19',
	descriprion: "Waterfall miricle",
    createdAt: new Date ("2018-03-16T16:20:00"),
	author: "explorer@advanture",
	photoLink: "Photos\\pic19.jpg"
   }, {
    id: '20',
	descriprion: "Slippery beaty",
    createdAt: new Date ("2018-03-16T16:23:00"),
	author: "traveller@dipsy",
	photoLink: "Photos\\pic20.jpg"
    }
];
    var getPhotoPosts = function (skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;

        var result = [];
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

    var getPhotoPost = function (id) {
        return photoPosts.find(function (item) {
            return item.id === id;
        });
    };

    var validatePhotoPost = function (post) {
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

    var addPhotoPost = function (post) {
        if (validatePhotoPost(post)) {
            photoPosts.push(post);
            photoPosts.sort(function (a, b) {
                return b.createdAt - a.createdAt;
            });
            return true;
        }
        return false;
    };

    var editPhotoPost = function (id, photoPost) {
        if (!photoPost) {
            return false;
        }

        var result = photoPosts.find(function (item) {
            return item.id === id;
        });

        if (result === null) {
            return false;
        }
        else {

            if ("description" in photoPost && (typeof photoPost.description === "string") && photoPost.description.length < 200) {
                result.description = photoPost.description;
            }
            if ("photoLink" in photoPost && (typeof photoPost.author === "string")) {
                result.photoLink = photoPost.photoLink;
            }
        }
    };

    var removePhotoPost = function (id) {
        var result = null;
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

    console.log("\ngetPhotoPosts(0, 10, {author: 'Anton'}):\n");
    module.getPhotoPosts(0, 10, {author: 'Anton'}).forEach(function (value) {
        console.log(value.author + " " + value.createdAt);
    });

    console.log("\ngetPhotoPost('1')\n");
    var result = module.getPhotoPost('1');
    console.log(result.id + " " + result.author + " " + result.createdAt);

    console.log("\nvalidatePhotoPost\n");
    console.log(module.validatePhotoPost({
        id: '21',
        description: 'rainny',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Victor',
        photoLink: 'pic21.jpg'
    }));
    console.log(module.validatePhotoPost({
        id: '21',
        description: 'rainny',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 2,
        photoLink: 'Photos\\pic21.jpg'
    }));

    console.log("\nadd photo post\n");
    module.addPhotoPost({
        id: '21',
        description: 'rainny',
        createdAt: new Date('1890-02-23T23:00:00'),
        author: 'Vicor',
        photoLink: 'Photos\\pic21.jpg'
    });
    console.log("After post adding");
    module.getPhotoPosts().forEach(function (value) {
        console.log(value.id + " \t" + value.createdAt);
    });

    console.log("\nedit photo post\n");
    module.editPhotoPost('21', {
        description: "измененное описание."
    });
    module.getPhotoPosts(0, 1).forEach(function (value) {
        console.log(value.id + " " + value.description);
    });

    console.log("\nremove post\n");
    module.removePhotoPost('4');
}

run();
