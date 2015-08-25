function dataTypes(data) {
    if( typeof(data) === 'number') {
        
        if ( (data.toString()).indexOf('.') > 0){
           
           return 'Float';
        }
        
        return 'integer';
    }
   
    else if( typeof(data) === 'string') {
        
         return 'string';
         
    }
    
    
    
    else if ( typeof(data) === 'undefined') {
        
        return 'undefined';
    }
    
    else if ( typeof(data) === 'boolean') {
        return 'boolean'
    }
    
    else if ( typeof(data) === 'object') {
        
        if (!data){
          return 'null';
        }
        if (Array.isArray(data)){
            return 'Array';
        }
        return 'object';
    }
    
    else {
        
        return 'Not Recognized';
    }
}