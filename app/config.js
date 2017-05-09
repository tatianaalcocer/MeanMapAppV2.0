// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "mongolab",
        url: "mongodb://testuser:test123@ds133241.mlab.com:33241/mongolab-scotch-app-test",
        port: 27017
    },

    local:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/MeanMapApp",
        port: 27017
    },

    localtest:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/MeanMapAppTest",
        port: 27017
    }

};
