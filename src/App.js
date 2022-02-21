import logo from './logo.svg';
import './App.css';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useState } from 'react';
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    fontSize: '12px'
  },
  section: {
    margin: 6,
    padding: 7,
  },
  headertext:{
    marginBottom: 6
  },
  viewer: {
    width: window.innerWidth - 1000, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function BasicDocument(props) {
  return (
    <PDFViewer style={styles.viewer} >
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.section}>
            <Text style={styles.headertext} >Hiring Manager</Text>
<Text style={styles.headertext} >
{props.company} </Text>

 
<Text style={styles.headertext}>
Dear {props.manager}, 
</Text>
</View>
<Text style={styles.section}>
Thank you for the opportunity to apply for the {props.role} role at your company. After  

reviewing your job description, it's clear that you're looking for a candidate that is extremely  

familiar with the responsibilities associated with the role, and can perform them confidently.  

Given these requirements, I am certain that I have the necessary skills to successfully do the job  

adeptly and perform above expectations. </Text> 


<Text style={styles.section}>

I am a focused professional who has been consistently praised as results-oriented by my co-  

workers and management. Over the course of my 3-year career, I've developed a skill set directly  

relevant to the Web Developer role you are hiring for, including programming, database  

development and web design. Overall, I have consistently demonstrated language, research and  

leadership abilities in every aspect of my full stack web developer role at freelancer, and I invite  

you to review my detailed achievements in the attached resume. </Text>
<Text style={styles.section}>

After reviewing my resume, I hope you will agree that I am the type of competent and competitive  

candidate you are looking for. I look forward to elaborating on how my specific skills and abilities  

will benefit your organization. </Text>
<Text style={styles.section}>
Please contact me via email at  

mhd31145@hotmail.com to arrange for a convenient meeting time. During our meeting I will be  

happy to explain in detail the work experience gap on my resume, at which time I was travelling  

abroad for an extended period. </Text>
<Text style={styles.section}>

Thank you for your consideration, and I look forward to hearing from you soon.  

Sincerely, 
</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
function App() {
  const [managerName, setManagerName] = useState('Hiring Manager')
  const [role, setRole] = useState('Web developer')
  const [companyName, setCompanyName] = useState('Enter company name')
  
  const changeHandler = (e) => {
    if(e.target.name == 'manager'){
      setManagerName(e.target.value)
    }
    else if(e.target.name == 'role'){
      setRole(e.target.value)
    }
    else if(e.target.name == 'company'){
      setCompanyName(e.target.value)
    }
  }
  
  return (
    <div className="App">
      <div className="container">
      <BasicDocument manager={managerName} role={role} company = {companyName}/>
      <div className='fields'>
        <label>Manager</label>
        <input onChange={e=> changeHandler(e)} type="text" className="inputfield" name="manager" />
        <label>role</label>
        <input  onChange={e=> changeHandler(e)} type="text" className="inputfield" name="role" />
        <label>company</label>
        <input  onChange={e=> changeHandler(e)} type="text" className="inputfield" name="company" />
      </div>
     
      </div>
    </div>
  );
}

export default App;
