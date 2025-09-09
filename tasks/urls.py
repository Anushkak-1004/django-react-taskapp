from django.urls import path
from .views import TaskListCreateView, toggle_task

urlpatterns = [
    path("tasks/", TaskListCreateView.as_view(), name="task-list-create"),
    path("tasks/<int:pk>/", toggle_task, name="task-toggle"),  # PATCH
]
