from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_permission(self, request, view):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        # if request.method in permissions.SAFE_METHODS:
        #     return True

        # Write permissions are only allowed to the owner of the snippet.
        print("============")
        print(request.path,request.method)
        if request.path=="/api/users/" and (request.method=="POST" or request.method=="GET"):
            return True
        return bool(request.user and request.user.is_authenticated)