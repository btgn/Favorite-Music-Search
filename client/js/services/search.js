angular.module("SearchSrvc", [])
    .factory("SearchService", function ($resource) {
        return {
            search: $resource("/api/search"),
            details: $resource("/api/details")
        }
    })