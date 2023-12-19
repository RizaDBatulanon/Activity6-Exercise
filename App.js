import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const accountsData = [
  { ID: 1, username: 'Teacher', password: 'Teacher21', usertype: 'Teacher' },
  { ID: 2, username: 'Teacher1', password: 'Teacher43', usertype: 'Teacher' },
  { ID: 3, username: 'Student', password: 'Student90', usertype: 'Student' },
  { ID: 4, username: 'Student1', password: 'Student78', usertype: 'Student' },
  { ID: 5, username: 'Student2', password: 'Student65', usertype: 'Student' },
  { ID: 6, username: 'Student3', password: 'Student34', usertype: 'Student' },
  { ID: 7, username: 'Teacher2', password: 'Teacher65', usertype: 'Teacher' },
  { ID: 8, username: 'Teacher3', password: 'Teacher87', usertype: 'Teacher' },
  { ID: 9, username: 'Teacher4', password: 'Teacher09', usertype: 'Teacher' },
  { ID: 10, username: 'Student4', password: 'Student12', usertype: 'Student' },
];


const usersData = [
  { ID: 1, firstname: 'Leanne', lastname: 'Graham', course: 'BSIT', year: '1', section: 'A' },
  { ID: 2, firstname: 'Ervin', lastname: 'Howell', course: 'BSCRIM', year: '2', section: 'B' },
  { ID: 3, firstname: 'Clementine', lastname: 'Bauch', course: 'BSIT', year: '3', section: 'C' },
  { ID: 4, firstname: 'Patricia', lastname: 'Lebsack', course: 'BSED', year: '4', section: 'D' },
  { ID: 5, firstname: 'Chelsey', lastname: 'Dietrich', course: 'BEED', year: '2', section: 'A' },
  { ID: 6, firstname: 'Dennis', lastname: 'Schulist', course: 'BS-ELEC', year: '1', section: 'B' },
  { ID: 7, firstname: 'Kurtis', lastname: 'Weissnat', course: 'BS-ELEC', year: '3', section: 'C' },
  { ID: 8, firstname: 'Nicholas', lastname: 'Runolfsdottir V', course: 'BSCRIM', year: '4', section: 'D' },
  { ID: 9, firstname: 'Glenna', lastname: 'Reichert', course: 'BEED', year: '3', section: 'A' },
  { ID: 10, firstname: 'Clementina', lastname: 'DuBuque', course: 'BSIT', year: '4', section: 'B' },
];

const studentsData = accountsData
  .filter((account) => account.usertype === 'Student')
  .map((student) => ({
    ID: student.ID,
    name: usersData.find((user) => user.ID === student.ID)?.firstname || '',
    course: usersData.find((user) => user.ID === student.ID)?.course || '',
  }));

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    tableContainer: { marginTop: 10, marginBottom: 20 },
    head: { height: 40, backgroundColor: '#A908B5' }, 
    text: { margin: 6, textAlign: 'center', fontFamily: 'Montserrat', color: '#333' }, 
  });
  
  const App = () => {
    const renderTable = (data, headers) => (
      <Table borderStyle={{ borderWidth: 1, borderColor: 'Violet' }}>
        <Row data={headers} style={styles.head} textStyle={styles.text} />
        {data.map((rowData, index) => (
          <Row key={index} data={Object.values(rowData)} textStyle={styles.text} />
        ))}
      </Table>
    );
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'Blue' }}>Accounts Table</Text>
        <ScrollView style={styles.tableContainer}>
          {renderTable(accountsData, ['ID', 'Username', 'Password', 'User Type'])}
        </ScrollView>
  
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'Blue' }}>Users Table</Text>
        <ScrollView style={styles.tableContainer}>
          {renderTable(usersData, ['ID', 'First Name', 'Last Name', 'Course', 'Year', 'Section'])}
        </ScrollView>
  
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'Blue' }}>Students Table</Text>
        <ScrollView style={styles.tableContainer}>
          <Table borderStyle={{ borderWidth: 1, borderColor: 'Violet' }}>
            <Row data={['ID', 'Name', 'Course']} style={styles.head} textStyle={styles.text} />
            <FlatList
              data={studentsData}
              keyExtractor={(item) => item.ID.toString()}
              renderItem={({ item }) => (
                <Row data={[item.ID, item.name, item.course]} textStyle={styles.text} />
              )}
            />
          </Table>
        </ScrollView>
      </View>
    );
  };

export default App;