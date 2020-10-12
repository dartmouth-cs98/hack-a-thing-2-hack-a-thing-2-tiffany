import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { withOrientation } from 'react-navigation';

import colors from '../config/colors';
import Announcement from './Announcement';



class AnnouncementScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            announcementArray: [],
            announcementText: '',
        };
    };
    deleteAnnouncement(key) {
        this.state.announcementArray.splice(key,1);
        this.setState({ announcementArray: this.state.announcementArray})
    }
    

    render (){

        let announcements = this.state.announcementArray.map ((val,key) => {
            return <Announcement key = {key} keyval = {key} val = {val} 
                    deleteMethod = { ()=> this.deleteAnnouncement(key) } />
                    // deleteMethod = { () => 
                    //     this.state.announcementArray.splice(key,1),
                    //     this.setState({ announcementArray: this.state.announcementArray}) }/>
        });

        return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}> ~ANNOUNCEMENTS~ </Text>
            </View>
            <ScrollView style = {styles.scrollContainer}>
                {announcements}
            </ScrollView>
    
            <View style = {styles.footer}>
                <TextInput
                    style = {styles.TextInput}
                    onChangeText={(announcementText) => this.setState({announcementText})}
                    value = {this.state.announcementText}
                    placeholder = "Type announcement here"
                    placeholderTextColor = "white"
                ></TextInput>
    
            </View>
            <TouchableOpacity onPress={ addAnnouncement.bind(this) } style = {styles.addButton}>
                <Text style = {styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
        );
    };
}
    function addAnnouncement() {
        if (this.state.announcementText) {
            var d = new Date();
            this.state.announcementArray.push({
                'date': (d.getMonth()+1) +"/"+ d.getDate()+"/"+d.getFullYear(), 
                'announcement': this.state.announcementText,
            });
            this.setState({announcementArray: this.state.announcementArray});
            this.setState({announcementText:''});
        }
}


   

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 5,
        borderBottomColor: colors.secondary,
    },
    headerText: {
        color: "white",
        fontSize: 20,
        padding: 10,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    TextInput : {
        alignSelf: "stretch",
        color: "white",
        padding: 40,
        backgroundColor: colors.primary,
    },
    addButton : {
        position: "absolute",
        right: 20,
        bottom: 60,
        backgroundColor: colors.secondary,
        width: 75,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
        elevation: 10,
        zIndex: 20,
        borderRadius: 50,
    },
    addButtonText: {
        color: "white",
        fontSize: 30,
    },
})
export default AnnouncementScreen;