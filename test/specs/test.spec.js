const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

var test=[{path:"replicated/account/logon/", element:'#userName',text: 'User name exist'},
{path:"replicated/account/logon/",element:'#userPassword',text:'User password exist'},
{path:"replicated/account/logon/",element:'#btnFormSubmit',text:'Submit button exist'},
{path:"replicated/account/logon/", element:'#rememberMe',text: 'Remember exist'}]


describe('My Login application', () => {
    
    
    
    for(var i=0;i<test.length;i++){
    	  DynamicLoadingPage.exist(test[i]);}
          
          
          
		
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
	//DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
	
    
            
		  
});

describe('Checking', () => {
    
    


        
       
               
        
        DynamicLoadingPage.checking("replicated/account/logon","#rememberMe", "remember is selected")
          
          
          xit('Checkbox selected', async () => {

            DynamicLoadingPage.open("replicated/account/logon")
            await browser.pause(2000);
            await DynamicLoadingPage.remember.click();
            await browser.pause(2000);
            await expect(DynamicLoadingPage.remember).toBeChecked()
                   
        });
		
    //DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", "Surfingyoga24-",'Blank password', "#profileImg" )
	//DynamicLoadingPage.login('replicated/account/logon','#userName','#userPassword',"#btnFormSubmit", "jgroening@yahoo.com", " ",'Blank password', '.errorDv')
	
    
            
		  
});
