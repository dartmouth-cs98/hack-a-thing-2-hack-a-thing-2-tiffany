import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';
import { withOrientation } from 'react-navigation';

import colors from '../config/colors'

export default class Announcement extends React.Component {
    render() {
        return (
            <View key={ this.props.keyval} style = {styles.announcement}>
                <Text style = {styles.announcementText}>{this.props.val.date}</Text>
                <Text style = {styles.announcementText}>{this.props.val.announcement}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style = {styles.announcementDelete}>
                    <Text style= {styles.announcementDeleteText}>X</Text>
                </TouchableOpacity>
            </View>
        );

    }
};

const styles = StyleSheet.create({
    announcement: {
        position: "relative",
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 5,
        borderBottomColor: colors.primary,
    },
    announcementText: {
        color: colors.secondary,
        fontSize: 20,
        paddingLeft: 10,
        borderLeftWidth: 10,
        borderLeftColor: colors.primary,
    },
    announcementDelete: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary,
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    announcementDeleteText: {
        color: "white",
        fontSize: 30,
    },
})
