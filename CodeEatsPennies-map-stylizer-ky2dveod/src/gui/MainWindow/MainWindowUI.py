# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'mainwindow.ui'
#
# Created by: PyQt5 UI code generator 5.9.2
#
# WARNING! All changes made in this file will be lost!

from PyQt5 import QtCore, QtGui, QtWidgets

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(986, 631)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.horizontalLayout = QtWidgets.QHBoxLayout(self.centralwidget)
        self.horizontalLayout.setObjectName("horizontalLayout")
        self.widget_left_panel = QtWidgets.QWidget(self.centralwidget)
        self.widget_left_panel.setMinimumSize(QtCore.QSize(350, 0))
        self.widget_left_panel.setObjectName("widget_left_panel")
        self.verticalLayout = QtWidgets.QVBoxLayout(self.widget_left_panel)
        self.verticalLayout.setObjectName("verticalLayout")
        self.widget_4 = QtWidgets.QWidget(self.widget_left_panel)
        self.widget_4.setObjectName("widget_4")
        self.horizontalLayout_8 = QtWidgets.QHBoxLayout(self.widget_4)
        self.horizontalLayout_8.setContentsMargins(-1, 0, -1, 0)
        self.horizontalLayout_8.setObjectName("horizontalLayout_8")
        self.pushButton_load = QtWidgets.QPushButton(self.widget_4)
        self.pushButton_load.setMinimumSize(QtCore.QSize(100, 0))
        self.pushButton_load.setObjectName("pushButton_load")
        self.horizontalLayout_8.addWidget(self.pushButton_load)
        spacerItem = QtWidgets.QSpacerItem(40, 20, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.horizontalLayout_8.addItem(spacerItem)
        self.pushButton_load_settings = QtWidgets.QPushButton(self.widget_4)
        self.pushButton_load_settings.setEnabled(False)
        self.pushButton_load_settings.setMinimumSize(QtCore.QSize(100, 0))
        self.pushButton_load_settings.setObjectName("pushButton_load_settings")
        self.horizontalLayout_8.addWidget(self.pushButton_load_settings)
        self.verticalLayout.addWidget(self.widget_4)
        self.widget_5 = QtWidgets.QWidget(self.widget_left_panel)
        self.widget_5.setObjectName("widget_5")
        self.horizontalLayout_9 = QtWidgets.QHBoxLayout(self.widget_5)
        self.horizontalLayout_9.setContentsMargins(-1, 0, -1, 0)
        self.horizontalLayout_9.setObjectName("horizontalLayout_9")
        self.pushButton_save = QtWidgets.QPushButton(self.widget_5)
        self.pushButton_save.setEnabled(False)
        self.pushButton_save.setMinimumSize(QtCore.QSize(100, 0))
        self.pushButton_save.setObjectName("pushButton_save")
        self.horizontalLayout_9.addWidget(self.pushButton_save)
        spacerItem1 = QtWidgets.QSpacerItem(40, 20, QtWidgets.QSizePolicy.Expanding, QtWidgets.QSizePolicy.Minimum)
        self.horizontalLayout_9.addItem(spacerItem1)
        self.pushButton_reset = QtWidgets.QPushButton(self.widget_5)
        self.pushButton_reset.setEnabled(False)
        self.pushButton_reset.setMinimumSize(QtCore.QSize(100, 0))
        self.pushButton_reset.setObjectName("pushButton_reset")
        self.horizontalLayout_9.addWidget(self.pushButton_reset)
        self.verticalLayout.addWidget(self.widget_5)
        self.groupBox_general_settings = QtWidgets.QGroupBox(self.widget_left_panel)
        self.groupBox_general_settings.setObjectName("groupBox_general_settings")
        self.verticalLayout_2 = QtWidgets.QVBoxLayout(self.groupBox_general_settings)
        self.verticalLayout_2.setObjectName("verticalLayout_2")
        self.widget_gen_1 = QtWidgets.QWidget(self.groupBox_general_settings)
        self.widget_gen_1.setObjectName("widget_gen_1")
        self.horizontalLayout_2 = QtWidgets.QHBoxLayout(self.widget_gen_1)
        self.horizontalLayout_2.setContentsMargins(0, 0, 0, 0)
        self.horizontalLayout_2.setObjectName("horizontalLayout_2")
        self.label = QtWidgets.QLabel(self.widget_gen_1)
        self.label.setObjectName("label")
        self.horizontalLayout_2.addWidget(self.label)
        self.doubleSpinBox_max = QtWidgets.QDoubleSpinBox(self.widget_gen_1)
        self.doubleSpinBox_max.setMinimumSize(QtCore.QSize(100, 0))
        self.doubleSpinBox_max.setMaximumSize(QtCore.QSize(100, 16777215))
        self.doubleSpinBox_max.setDecimals(0)
        self.doubleSpinBox_max.setMinimum(1.0)
        self.doubleSpinBox_max.setMaximum(40000.0)
        self.doubleSpinBox_max.setProperty("value", 6000.0)
        self.doubleSpinBox_max.setObjectName("doubleSpinBox_max")
        self.horizontalLayout_2.addWidget(self.doubleSpinBox_max)
        self.verticalLayout_2.addWidget(self.widget_gen_1)
        self.widget_gen_2 = QtWidgets.QWidget(self.groupBox_general_settings)
        self.widget_gen_2.setObjectName("widget_gen_2")
        self.horizontalLayout_3 = QtWidgets.QHBoxLayout(self.widget_gen_2)
        self.horizontalLayout_3.setContentsMargins(0, 0, 0, 0)
        self.horizontalLayout_3.setObjectName("horizontalLayout_3")
        self.verticalLayout_2.addWidget(self.widget_gen_2)
        self.widget_gen_3 = QtWidgets.QWidget(self.groupBox_general_settings)
        self.widget_gen_3.setObjectName("widget_gen_3")
        self.horizontalLayout_4 = QtWidgets.QHBoxLayout(self.widget_gen_3)
        self.horizontalLayout_4.setContentsMargins(0, 0, 0, 0)
        self.horizontalLayout_4.setObjectName("horizontalLayout_4")
        self.label_bg_color = QtWidgets.QLabel(self.widget_gen_3)
        self.label_bg_color.setObjectName("label_bg_color")
        self.horizontalLayout_4.addWidget(self.label_bg_color)
        self.button_bg_color = QtWidgets.QPushButton(self.widget_gen_3)
        self.button_bg_color.setMinimumSize(QtCore.QSize(100, 0))
        self.button_bg_color.setMaximumSize(QtCore.QSize(100, 16777215))
        self.button_bg_color.setText("")
        self.button_bg_color.setObjectName("button_bg_color")
        self.horizontalLayout_4.addWidget(self.button_bg_color)
        self.verticalLayout_2.addWidget(self.widget_gen_3)
        self.verticalLayout.addWidget(self.groupBox_general_settings)
        self.groupBox_line_settings = QtWidgets.QGroupBox(self.widget_left_panel)
        self.groupBox_line_settings.setObjectName("groupBox_line_settings")
        self.verticalLayout_4 = QtWidgets.QVBoxLayout(self.groupBox_line_settings)
        self.verticalLayout_4.setObjectName("verticalLayout_4")
        self.treeWidget_line_settings = QtWidgets.QTreeWidget(self.groupBox_line_settings)
        self.treeWidget_line_settings.setEnabled(False)
        self.treeWidget_line_settings.setObjectName("treeWidget_line_settings")
        self.treeWidget_line_settings.header().setVisible(False)
        self.verticalLayout_4.addWidget(self.treeWidget_line_settings)
        self.widget = QtWidgets.QWidget(self.groupBox_line_settings)
        self.widget.setObjectName("widget")
        self.horizontalLayout_5 = QtWidgets.QHBoxLayout(self.widget)
        self.horizontalLayout_5.setContentsMargins(-1, 0, -1, 0)
        self.horizontalLayout_5.setObjectName("horizontalLayout_5")
        self.label_line = QtWidgets.QLabel(self.widget)
        self.label_line.setEnabled(False)
        self.label_line.setObjectName("label_line")
        self.horizontalLayout_5.addWidget(self.label_line)
        self.button_line = QtWidgets.QPushButton(self.widget)
        self.button_line.setEnabled(False)
        self.button_line.setMinimumSize(QtCore.QSize(100, 0))
        self.button_line.setMaximumSize(QtCore.QSize(100, 16777215))
        self.button_line.setText("")
        self.button_line.setObjectName("button_line")
        self.horizontalLayout_5.addWidget(self.button_line)
        self.verticalLayout_4.addWidget(self.widget)
        self.widget_3 = QtWidgets.QWidget(self.groupBox_line_settings)
        self.widget_3.setObjectName("widget_3")
        self.horizontalLayout_7 = QtWidgets.QHBoxLayout(self.widget_3)
        self.horizontalLayout_7.setContentsMargins(-1, 0, -1, 0)
        self.horizontalLayout_7.setObjectName("horizontalLayout_7")
        self.doubleSpinBox_line = QtWidgets.QDoubleSpinBox(self.widget_3)
        self.doubleSpinBox_line.setEnabled(False)
        self.doubleSpinBox_line.setDecimals(2)
        self.doubleSpinBox_line.setMaximum(100.0)
        self.doubleSpinBox_line.setSingleStep(1.0)
        self.doubleSpinBox_line.setObjectName("doubleSpinBox_line")
        self.horizontalLayout_7.addWidget(self.doubleSpinBox_line)
        self.comboBox_line = QtWidgets.QComboBox(self.widget_3)
        self.comboBox_line.setEnabled(False)
        self.comboBox_line.setObjectName("comboBox_line")
        self.comboBox_line.addItem("")
        self.comboBox_line.addItem("")
        self.comboBox_line.addItem("")
        self.comboBox_line.addItem("")
        self.comboBox_line.addItem("")
        self.horizontalLayout_7.addWidget(self.comboBox_line)
        self.comboBox_cap = QtWidgets.QComboBox(self.widget_3)
        self.comboBox_cap.setEnabled(False)
        self.comboBox_cap.setObjectName("comboBox_cap")
        self.comboBox_cap.addItem("")
        self.comboBox_cap.addItem("")
        self.comboBox_cap.addItem("")
        self.horizontalLayout_7.addWidget(self.comboBox_cap)
        self.comboBox_join = QtWidgets.QComboBox(self.widget_3)
        self.comboBox_join.setEnabled(False)
        self.comboBox_join.setObjectName("comboBox_join")
        self.comboBox_join.addItem("")
        self.comboBox_join.addItem("")
        self.comboBox_join.addItem("")
        self.horizontalLayout_7.addWidget(self.comboBox_join)
        self.verticalLayout_4.addWidget(self.widget_3)
        self.verticalLayout.addWidget(self.groupBox_line_settings)
        self.groupBox_fill_settings = QtWidgets.QGroupBox(self.widget_left_panel)
        self.groupBox_fill_settings.setObjectName("groupBox_fill_settings")
        self.verticalLayout_3 = QtWidgets.QVBoxLayout(self.groupBox_fill_settings)
        self.verticalLayout_3.setObjectName("verticalLayout_3")
        self.treeWidget_fill_settings = QtWidgets.QTreeWidget(self.groupBox_fill_settings)
        self.treeWidget_fill_settings.setEnabled(False)
        self.treeWidget_fill_settings.setObjectName("treeWidget_fill_settings")
        self.treeWidget_fill_settings.header().setVisible(False)
        self.verticalLayout_3.addWidget(self.treeWidget_fill_settings)
        self.widget_2 = QtWidgets.QWidget(self.groupBox_fill_settings)
        self.widget_2.setObjectName("widget_2")
        self.horizontalLayout_6 = QtWidgets.QHBoxLayout(self.widget_2)
        self.horizontalLayout_6.setContentsMargins(-1, 0, -1, 0)
        self.horizontalLayout_6.setObjectName("horizontalLayout_6")
        self.label_fill = QtWidgets.QLabel(self.widget_2)
        self.label_fill.setEnabled(False)
        self.label_fill.setObjectName("label_fill")
        self.horizontalLayout_6.addWidget(self.label_fill)
        self.button_fill = QtWidgets.QPushButton(self.widget_2)
        self.button_fill.setEnabled(False)
        self.button_fill.setMinimumSize(QtCore.QSize(100, 0))
        self.button_fill.setMaximumSize(QtCore.QSize(100, 16777215))
        self.button_fill.setText("")
        self.button_fill.setObjectName("button_fill")
        self.horizontalLayout_6.addWidget(self.button_fill)
        self.verticalLayout_3.addWidget(self.widget_2)
        self.verticalLayout.addWidget(self.groupBox_fill_settings)
        self.horizontalLayout.addWidget(self.widget_left_panel)
        self.widget_map = MapWidget(self.centralwidget)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Preferred, QtWidgets.QSizePolicy.Preferred)
        sizePolicy.setHorizontalStretch(1)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.widget_map.sizePolicy().hasHeightForWidth())
        self.widget_map.setSizePolicy(sizePolicy)
        self.widget_map.setMinimumSize(QtCore.QSize(300, 300))
        self.widget_map.setObjectName("widget_map")
        self.horizontalLayout.addWidget(self.widget_map)
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QtWidgets.QMenuBar(MainWindow)
        self.menubar.setGeometry(QtCore.QRect(0, 0, 986, 21))
        self.menubar.setObjectName("menubar")
        MainWindow.setMenuBar(self.menubar)

        self.retranslateUi(MainWindow)
        self.button_bg_color.clicked.connect(MainWindow.bgColorBtnClicked)
        self.pushButton_load.clicked.connect(MainWindow.loadOSMFile)
        self.pushButton_save.clicked.connect(MainWindow.saveImage)
        self.treeWidget_line_settings.itemSelectionChanged.connect(MainWindow.lineSelChanged)
        self.treeWidget_fill_settings.itemSelectionChanged.connect(MainWindow.fillSelChanged)
        self.button_line.clicked.connect(MainWindow.lineColorBtnClicked)
        self.button_fill.clicked.connect(MainWindow.fillColorBtnClicked)
        self.doubleSpinBox_line.valueChanged['double'].connect(MainWindow.lineWidthChanged)
        self.comboBox_line.currentTextChanged['QString'].connect(MainWindow.lineComboChanged)
        self.comboBox_cap.currentTextChanged['QString'].connect(MainWindow.capComboChanged)
        self.comboBox_join.currentTextChanged['QString'].connect(MainWindow.joinComboChanged)
        self.treeWidget_line_settings.itemChanged['QTreeWidgetItem*','int'].connect(MainWindow.checkboxChanged)
        self.treeWidget_fill_settings.itemChanged['QTreeWidgetItem*','int'].connect(MainWindow.checkboxChanged)
        self.pushButton_reset.clicked.connect(MainWindow.resetBtnClicked)
        self.pushButton_load_settings.clicked.connect(MainWindow.loadSettingsClicked)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "Map Stylizer"))
        self.pushButton_load.setText(_translate("MainWindow", "Load OSM File"))
        self.pushButton_load_settings.setText(_translate("MainWindow", "Load Settings"))
        self.pushButton_save.setText(_translate("MainWindow", "Save Image"))
        self.pushButton_reset.setText(_translate("MainWindow", "Reset Settings"))
        self.groupBox_general_settings.setTitle(_translate("MainWindow", "General Settings"))
        self.label.setText(_translate("MainWindow", "Max Dimension"))
        self.label_bg_color.setText(_translate("MainWindow", "Background Color"))
        self.groupBox_line_settings.setTitle(_translate("MainWindow", "Line Settings"))
        self.label_line.setText(_translate("MainWindow", "<value>"))
        self.comboBox_line.setItemText(0, _translate("MainWindow", "Solid Line"))
        self.comboBox_line.setItemText(1, _translate("MainWindow", "Dash Line"))
        self.comboBox_line.setItemText(2, _translate("MainWindow", "Dot Line"))
        self.comboBox_line.setItemText(3, _translate("MainWindow", "Dash-Dot Line"))
        self.comboBox_line.setItemText(4, _translate("MainWindow", "Dash-Dot-Dot Line"))
        self.comboBox_cap.setItemText(0, _translate("MainWindow", "Square Cap"))
        self.comboBox_cap.setItemText(1, _translate("MainWindow", "Flat Cap"))
        self.comboBox_cap.setItemText(2, _translate("MainWindow", "Round Cap"))
        self.comboBox_join.setItemText(0, _translate("MainWindow", "Bevel Join"))
        self.comboBox_join.setItemText(1, _translate("MainWindow", "Miter Join"))
        self.comboBox_join.setItemText(2, _translate("MainWindow", "Round Join"))
        self.groupBox_fill_settings.setTitle(_translate("MainWindow", "Fill Settings"))
        self.label_fill.setText(_translate("MainWindow", "<value>"))

from mapwidget import MapWidget
