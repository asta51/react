import javax.swing.*;
import javax.swing.table.DefaultTableModel;

import java.awt.event.*;
import java.util.Scanner;
class loader
{
	public static void main(String args[]){
        Object[][] data = {{101,"amit",670000},
                            {102,"jai",5400000},
                            {103,"sachin",720000}
        };
        String[] c1 = {"ID","NAME","SALARY"};
        DefaultTableModel tm = new DefaultTableModel(data,c1);
        JFrame x = new JFrame("Select gender");
        JPanel y = new JPanel();
        
    }
}