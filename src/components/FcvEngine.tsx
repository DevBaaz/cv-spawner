import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { fcvObj, FcvObjPrototype} from './Fcv';

const FcvPdfBuild = (obj: FcvObjPrototype) =>  {
    const styles = StyleSheet.create ({
        page: {backgroundColor: 'white', color: 'black'}, section: {margin: '-10 20 0 20', padding: 15}, viewer: {width: window.innerWidth, height: window.innerHeight}, 
        majorheading: {fontWeight: 'bold', fontSize: 25, textAlign: 'center', marginTop: 20, marginBottom: 10}, minorheading: {fontWeight: 'bold', fontSize: 15, marginBottom: 10}, 
        text: {fontSize: 12}, specText: {fontSize: 12, margin: '10 0 10 0'}, pdfList: {flexDirection: "row", marginBottom: 4}, pdfListBullet: {fontSize: 12, marginHorizontal: 8},
        flexYear: {fontSize: 12, width: '20%'}, flexRole: {fontSize: 12, width: '30%' }, flexOrg: {fontSize: 12, width: '50%' }, flexWork: {fontSize: 12, width: '80%' },
        exRoles: {fontSize: 12, marginHorizontal: '20'}, 
        centerText: {fontSize: 12, textAlign:'center'}, pqtext: {fontSize: 12, marginTop: 10}, rowflex: {flexDirection: 'row', justifyContent: 'space-between'}, 
        columnflex: {flexDirection: 'column', justifyContent: 'space-between'},
    })

    const KSA = (ksa: string, ksa1?: string, ksa2?: string, ksa3?: string, ksa4?: string, ksa5?: string) => {
        return (
        <>
            <View style={styles.columnflex}>
                <Text style={styles.minorheading}>{ksa}</Text>
                {ksa1 ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{ksa1}</Text></View> : ''}
                {ksa2 ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{ksa2}</Text></View> : ''}
                {ksa3 ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{ksa3}</Text></View> : ''}
                {ksa4 ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{ksa4}</Text></View> : ''}
                {ksa5 ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{ksa5}</Text></View> : ''}
            </View>
        </>
        )
    }

    const EQ = (eqyear?: string, eqqualification?: string, eqschool?: string, eqspecialization?: string, eqmodule1?: string, eqmodule2?: string, eqmodule3?: string, eqmodule4?: string, eqmodule5?: string) => {
        return (
        <>
            <View style={styles.columnflex}>
                {eqyear ? <Text style={styles.text}>{eqyear}    {eqqualification}, {eqschool}</Text> : ''}
                {eqspecialization ? <Text style={styles.specText}>Specialising in {eqspecialization} with modules to date including:</Text> : ''}
                {eqmodule1 ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{eqmodule1}</Text></View> : ''}
                {eqmodule2 ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{eqmodule2}</Text></View> : ''}
                {eqmodule3 ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{eqmodule3}</Text></View> : ''}
                {eqmodule4 ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{eqmodule4}</Text></View> : ''}
                {eqmodule5 ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{eqmodule5}</Text></View> : ''}
            </View>
        </>
        )
    }

    const EX = (exyear?: string, exposition?: string, exfirm?: string, exrole1?: string, exrole2?: string, exrole3?: string, exrole4?: string, exrole5?: string) => {
        return (
            <>
                {exyear ? <View style={styles.rowflex}>
                <Text style={styles.flexYear}>{exyear}</Text>
                <Text style={styles.flexRole}>{exposition}</Text>
                <Text style={styles.flexOrg}>{exfirm}</Text>
                </View> : ''} 
                {exrole1 ? <View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>{exrole1}</Text></View> : '' }
                {exrole2 ? <View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>{exrole2}</Text></View> : '' }
                {exrole3 ? <View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>{exrole3}</Text></View> : '' }
                {exrole4 ? <View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>{exrole4}</Text></View> : '' }
                {exrole5 ? <View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>{exrole5}</Text></View> : '' }
            </>
        )
    }

    const AI = (ai: string) => {
        return (
        <>
            <View style={styles.columnflex}>
                <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{ai}</Text></View>
            </View>
        </>
        )
    }


    return (
        <PDFViewer style={styles.viewer}>
            <Document>
                <Page size='A4' style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.majorheading}>{obj.name}</Text>
                        <Text style={styles.centerText}>Tel: {obj.tel}</Text>
                        <Text style={styles.centerText}>email: {obj.email}</Text>
                        <Text style={styles.centerText}>{obj.linkedIn}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.minorheading}>PERSONAL PROFILE</Text>
                        <Text style={styles.text}>{obj.personalProfile}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.minorheading}>KEY SKILLS AND ATTRIBUTES</Text>
                        {obj.kSA1 ? KSA(obj.kSA1, obj.kSA1a, obj.kSA1b, obj.kSA1c, obj.kSA1d, obj.kSA1e) : ''}
                        {obj.kSA2 ? KSA(obj.kSA2, obj.kSA2a, obj.kSA2b, obj.kSA2c, obj.kSA2d, obj.kSA2e) : ''}
                        {obj.kSA3 ? KSA(obj.kSA3, obj.kSA3a, obj.kSA3b, obj.kSA3c, obj.kSA3d, obj.kSA3e) : ''}
                        {obj.kSA4 ? KSA(obj.kSA4, obj.kSA4a, obj.kSA4b, obj.kSA4c, obj.kSA4d, obj.kSA4e) : ''}
                        {obj.kSA5 ? KSA(obj.kSA5, obj.kSA5a, obj.kSA5b, obj.kSA5c, obj.kSA5d, obj.kSA5e) : ''}
                        {obj.kSA6 ? KSA(obj.kSA6, obj.kSA6a, obj.kSA6b, obj.kSA6c, obj.kSA6d, obj.kSA6e) : ''}
                        {obj.kSA7 ? KSA(obj.kSA7, obj.kSA7a, obj.kSA7b, obj.kSA7c, obj.kSA7d, obj.kSA7e) : ''}
                        {obj.kSA8 ? KSA(obj.kSA8, obj.kSA8a, obj.kSA8b, obj.kSA8c, obj.kSA8d, obj.kSA8e) : ''}
                    </View>
                    <View style={styles.section}>
                    <Text style={styles.minorheading}>EDUCATION AND QUALIFICATIONS</Text>
                        {obj.eQ1Year ? EQ(obj.eQ1Year, obj.eQ1Qualification, obj.eQ1School, obj.eQ1Specialization, obj.eQ1Module1, obj.eQ1Module2, obj.eQ1Module3, obj.eQ1Module4, obj.eQ1Module5) : ''}
                        {obj.eQ2Year ? EQ(obj.eQ2Year, obj.eQ2Qualification, obj.eQ2School, obj.eQ2Specialization, obj.eQ2Module1, obj.eQ2Module2, obj.eQ2Module3, obj.eQ2Module4, obj.eQ2Module5) : ''}
                        {obj.eQ3Year ? EQ(obj.eQ3Year, obj.eQ3Qualification, obj.eQ3School, obj.eQ3Specialization, obj.eQ3Module1, obj.eQ3Module2, obj.eQ3Module3, obj.eQ3Module4, obj.eQ3Module5) : ''}
                        {obj.eQ4Year ? EQ(obj.eQ4Year, obj.eQ4Qualification, obj.eQ4School, obj.eQ4Specialization, obj.eQ4Module1, obj.eQ4Module2, obj.eQ4Module3, obj.eQ4Module4, obj.eQ4Module5) : ''}
                        {obj.eQ5Year ? EQ(obj.eQ5Year, obj.eQ5Qualification, obj.eQ5School, obj.eQ5Specialization, obj.eQ5Module1, obj.eQ5Module2, obj.eQ5Module3, obj.eQ5Module4, obj.eQ5Module5) : ''}
                        {obj.eQ6Year ? EQ(obj.eQ6Year, obj.eQ6Qualification, obj.eQ6School, obj.eQ6Specialization, obj.eQ6Module1, obj.eQ6Module2, obj.eQ6Module3, obj.eQ6Module4, obj.eQ6Module5) : ''}
                        {obj.eQ7Year ? EQ(obj.eQ7Year, obj.eQ7Qualification, obj.eQ7School, obj.eQ7Specialization, obj.eQ7Module1, obj.eQ7Module2, obj.eQ7Module3, obj.eQ7Module4, obj.eQ7Module5) : ''}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.minorheading}>EXPERIENCE</Text>
                        {obj.ex1Year ? EX(obj.ex1Year, obj.ex1Position, obj.ex1Firm, obj.ex1Role1, obj.ex1Role2, obj.ex1Role3, obj.ex1Role4, obj.ex1Role5) : ''}
                        {obj.ex2Year ? EX(obj.ex2Year, obj.ex2Position, obj.ex2Firm, obj.ex2Role1, obj.ex2Role2, obj.ex2Role3, obj.ex2Role4, obj.ex2Role5) : ''}
                        {obj.ex3Year ? EX(obj.ex3Year, obj.ex3Position, obj.ex3Firm, obj.ex3Role1, obj.ex3Role2, obj.ex3Role3, obj.ex3Role4, obj.ex3Role5) : ''}
                        {obj.ex4Year ? EX(obj.ex4Year, obj.ex4Position, obj.ex4Firm, obj.ex4Role1, obj.ex4Role2, obj.ex4Role3, obj.ex4Role4, obj.ex4Role5) : ''}
                        {obj.ex5Year ? EX(obj.ex5Year, obj.ex5Position, obj.ex5Firm, obj.ex5Role1, obj.ex5Role2, obj.ex5Role3, obj.ex5Role4, obj.ex5Role5) : ''}
                        {obj.ex6Year ? EX(obj.ex6Year, obj.ex6Position, obj.ex6Firm, obj.ex6Role1, obj.ex6Role2, obj.ex6Role3, obj.ex6Role4, obj.ex6Role5) : ''}
                        {obj.ex7Year ? EX(obj.ex7Year, obj.ex7Position, obj.ex7Firm, obj.ex7Role1, obj.ex7Role2, obj.ex7Role3, obj.ex7Role4, obj.ex7Role5) : ''}
                        {obj.ex8Year ? EX(obj.ex8Year, obj.ex8Position, obj.ex8Firm, obj.ex8Role1, obj.ex8Role2, obj.ex8Role3, obj.ex8Role4, obj.ex8Role5) : ''}
                        {obj.ex9Year ? EX(obj.ex9Year, obj.ex9Position, obj.ex9Firm, obj.ex9Role1, obj.ex9Role2, obj.ex9Role3, obj.ex9Role4, obj.ex9Role5) : ''}
                        {obj.ex10Year ? EX(obj.ex10Year, obj.ex10Position, obj.ex10Firm, obj.ex10Role1, obj.ex10Role2, obj.ex10Role3, obj.ex10Role4, obj.ex10Role5) : ''}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.minorheading}>ADDITIONAL INFORMATION</Text>
                        {obj.aI1 ? AI(obj.aI1) : ''}
                        {obj.aI2 ? AI(obj.aI2) : ''}
                        {obj.aI3 ? AI(obj.aI3) : ''}
                        {obj.aI4 ? AI(obj.aI4) : ''}
                        {obj.aI5 ? AI(obj.aI5) : ''}
                        {obj.aI6 ? AI(obj.aI6) : ''}
                        {obj.aI7 ? AI(obj.aI7) : ''}
                        {obj.aI8 ? AI(obj.aI8) : ''}
                        {obj.aI9 ? AI(obj.aI9) : ''}
                        {obj.aI10 ? AI(obj.aI10) : ''}
                    </View>     
                </Page>
            </Document>
        </PDFViewer>
    )
}

const FcvEngine = () => {
    return(<><FcvPdfBuild {...fcvObj} /></>)
}

export {FcvEngine, FcvPdfBuild};