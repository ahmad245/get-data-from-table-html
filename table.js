var HTMLtbl  =
            {
                getData: function (table) {
                    var data = [];
                    table.find('tr').not(':first').each(function (rowIndex, r) {
                        var cols = [];
                        $(this).find('td').each(function (colIndex, c) {

                            if ($(this).children(':text,:hidden,textarea,select').length > 0)
                            {
                                console.log('first');
                                cols.push($(this).children('input,textarea,select').val().trim());
                            }

                            // if dropdown text is needed then uncomment it and remove SELECT from above IF condition//
                            // else if ($(this).children('select').length > 0)
                            // cols.push($(this).find('option:selected').text());

                            else if ($(this).find('input[type=checkbox]').length>0)
                            {
                                console.log('seco');
                                cols.push($(this).find('input[type=checkbox]:checked').length>0 ? 1 : 0);
                            }

                            else
                                console.log('third');
                                cols.push($(this).text().trim());
                        });
                        data.push(cols);
                    });
                    return data;
                }
            }
        $(document).on('click', '#btnSave', function () {
            var data = HTMLtbl.getData($('#sorted_table_jd'));

            console.log(data)
        })


// or 
var HTMLtbl  =
{
getData: function (table) {
var data = [];
table.find('tr').not(':first').each(function (rowIndex, r) {
var cols = [];
$(this).find('td').each(function (colIndex, c) {
if ($(this).find('input[type=checkbox]:checked').length>0){

console.log($(this).find('input[type=checkbox]:checked'));
}

if ($(this).children(':text,:hidden,textarea,select').length > 0)
{
console.log('first');
cols.push($(this).children('input,textarea,select').val().trim());
}

// if dropdown text is needed then uncomment it and remove SELECT from above IF condition//
// else if ($(this).children('select').length > 0)
// cols.push($(this).find('option:selected').text());

else if ($(this).children(':checkbox').length > 0)
{
console.log('seco');
cols.push($(this).children(':checkbox').is(':checked') ? 1 : 0);
}

else
console.log('third');
cols.push($(this).text().trim());
});
data.push(cols);
});
return data;
}
}