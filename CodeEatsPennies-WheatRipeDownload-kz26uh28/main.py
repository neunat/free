

from​ ​xml​.​dom​ ​import​ ​minidom 
​import​ ​os 
​import​ ​openpyxl 
​import​ ​xml​.​etree​.​ElementTree​ ​as​ ​gfg 

​root​ ​=​ ​gfg​.​Element​(​"pages"​)​#xml things 
​path​ ​=​ ​"newXlsx.xlsx" 

​wb_obj​ ​=​ ​openpyxl​.​load_workbook​(​path​) 
​sheet_obj​ ​=​ ​wb_obj​.​active 
​  
​sheet_object​ ​=​ ​wb_obj​.​active 
​max_rows​ ​=​ ​sheet_object​.​max_row​#finding how many rows there are 

​i​ ​=​ ​2​#if i=1, it would use "21/22" (the year) as well 
​while​ ​i​ ​<=​ ​max_rows​: 
​  ​cell_obj​ ​=​ ​sheet_obj​.​cell​(​row​ ​=​ ​i​, ​column​ ​=​ ​1​) 
​  ​if​ (​cell_obj​.​value​ ​is​ ​None​) ​or​ (​cell_obj​.​value​ ​==​ ​"GYM"​) ​or​ (​cell_obj​.​value​ ​==​ ​"DANCE"​):​#filters out empty, "dance", and "gym" results 
​    ​a​ ​=​ ​1 
​  ​else​: 
​    ​txt​ ​=​ ​cell_obj​.​value 
​    ​x​ ​=​ ​"RM "​ ​in​ ​txt 
​    ​if​ (​x​ ​==​ ​True​):​#filters out room number results 
​      ​a​ ​=​ ​1 
​    ​else​: 
​       
​        ​m1​ ​=​ ​gfg​.​Element​(​"school"​) 
​        ​root​.​append​ (​m1​) 
​         
​        ​b1​ ​=​ ​gfg​.​SubElement​(​m1​, ​"data"​) 
​        ​b1​.​text​ ​=​ (​cell_obj​.​value​) 
​         
​        ​print​(​cell_obj​.​value​) 
​  ​i​ ​=​ ​i​+​1 







​  
​# This is my path 
​path​=​"Data" 
​  
​# to store files in a list 
​list​ ​=​ [] 
​  
​# dirs=directories 
​for​ (​root​, ​dirs​, ​file​) ​in​ ​os​.​walk​(​path​): 
​  ​for​ ​f​ ​in​ ​file​: 
​    ​print​(​f​) 