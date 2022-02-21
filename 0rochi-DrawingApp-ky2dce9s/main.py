from PyQt5.QtWidgets import * 
from PyQt5.QtGui import * 
from PyQt5.QtCore import * 
import sys

class Window(QMainWindow):
    def __init__(self):
        super().__init__()

self.SetWindowTitle("Untitled - Paint")

self.setGeometry(100, 100, 800, 600)