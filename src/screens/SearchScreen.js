import React, {useState} from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults  from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    
    const [searchApi, results,  errorMessage] = useResults();
    
    const filterResultByPrice = (price) =>{
        //price === '$' || '$$ || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }
    return(
        <>
            <SearchBar
                term = {term} 
                onTermChange = {(newterm) => setTerm(newterm)}
                onTermSubmit = {() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            
            {/* <Text> length of results is {results.length}</Text> */}

            <ScrollView>
                <ResultsList  results = {filterResultByPrice('$')} title = "Cost Effective"/>
                <ResultsList  results = {filterResultByPrice('$$')} title = "Bit Pricer"/>
                <ResultsList  results = {filterResultByPrice('$$$')} title = "Big Spender"/>
            </ScrollView>
        </>
    );
};


const styles = StyleSheet.create({
    
});

export default SearchScreen;