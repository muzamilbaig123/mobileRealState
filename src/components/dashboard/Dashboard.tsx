import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, ActivityIndicator, SafeAreaView, Image } from 'react-native';
import Header from '../header/Header';
import axios from 'axios';
import apis from '../../utils/apis';
import Footer from '../footer/Footer';

type DataType = {
    CONTENT_ID: string,
    TITLE: string,
    IS_PREMIUM: string,
    AGE_RATING: string,
    SEEPRIME_ORIGINALS: string | null,
    PARTWISE: string | null,
    THUMBNAIL_PATH: any
}

export default function Dashboard() {
    const [data, setData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    // Fetch data from API
    const fetchData = async () => {
        try {
            const res = await axios.get(apis().tableDataApi);
            setData(res.data); 
            setLoading(false); 
        } catch (e) {
            console.log(e, "Error fetching data");
            setError("Failed to fetch data"); 
            setLoading(false); 
        }
    };

    // Use useEffect to call fetchData when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // Render each row of the table
    const renderItem = ({ item }: { item: DataType }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.CONTENT_ID}</Text>
            <Text style={styles.cell}>{item.TITLE}</Text>
            <Text style={styles.cell}>{item.IS_PREMIUM}</Text>
            <Text style={styles.cell}>{item.AGE_RATING}</Text>
            <Text style={styles.cell}>{item.SEEPRIME_ORIGINALS || 'N/A'}</Text>
            <Text style={styles.cell}>{item.PARTWISE || 'N/A'}</Text>
            {/* <Text style={styles.cell}>{item.THUMBNAIL_PATH}</Text> */}
            <View style={styles.cell}>
            <Image source={{uri: item.THUMBNAIL_PATH}} width={20} height={20}  resizeMode="contain" />

            </View>
        </View>
    );

    // Show loading indicator while data is being fetched
    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Show error message if there's an error
    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <>
        <ScrollView>
            <Header />
            {/* main */}
            <SafeAreaView style={styles.container}>
                <ScrollView horizontal>
                    <View>
                        {/* Table Header */}
                        <View style={styles.header}>
                            <Text style={styles.headerCell}>ID</Text>
                            <Text style={styles.headerCell}>Title</Text>
                            <Text style={styles.headerCell}>Premium</Text>
                            <Text style={styles.headerCell}>Age Rating</Text>
                            <Text style={styles.headerCell}>See Prime</Text>
                            <Text style={styles.headerCell}>Partwise</Text>
                            <Text style={styles.headerCell}>Image</Text>
                        </View>
                        {/* Table Body */}
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.CONTENT_ID}
                            style={styles.flatList}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>

            {/* footer */}
            <Footer/>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginVertical: 20
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#ddd',
        padding: 16,
    },
    headerCell: {
        width: 100, // Adjust width as needed
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
    },
    cell: {
        width: 100, // Adjust width as needed
        textAlign: 'center',
        fontSize: 16,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
    flatList: {
        width: '100%', // Ensure FlatList takes full width
    },
});