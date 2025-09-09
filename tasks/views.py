from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Task
from .serializers import TaskSerializer

# Create and List Tasks
class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

# Bonus: Toggle is_done
@api_view(["PATCH"])
def toggle_task(request, pk):
    try:
        task = Task.objects.get(pk=pk)
    except Task.DoesNotExist:
        return Response({"error": "Task not found"}, status=404)

    task.is_done = not task.is_done
    task.save()
    return Response(TaskSerializer(task).data)



