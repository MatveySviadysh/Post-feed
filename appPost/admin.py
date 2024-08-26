from django.contrib import admin
from .models import Post, Like

class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author', 'created_at', 'likes')  
    search_fields = ('title', 'content') 
    list_filter = ('author', 'created_at')  

class LikeAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'post', 'created_at')  
    list_filter = ('user', 'post', 'created_at')  

admin.site.register(Post, PostAdmin)
admin.site.register(Like, LikeAdmin)
