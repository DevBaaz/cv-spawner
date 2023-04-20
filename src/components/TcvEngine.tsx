import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { tcvObj, TcvObjPrototype} from './Tcv';


const TcvPdfBuild = (obj: TcvObjPrototype) =>  {
    const styles = StyleSheet.create ({
        page: {  backgroundColor: 'white', color: 'black',}, section: {  margin: '-10 20 0 20', padding: 15,}, viewer: { width: window.innerWidth, height: window.innerHeight }, 
        majorheading: { fontWeight: 'bold', fontSize: 25, textAlign: 'center', marginTop: 20, marginBottom: 10}, minorheading: { fontWeight: 'bold', fontSize: 15, marginBottom: 10}, 
        text: {fontSize: 12}, pdfList: { flexDirection: "row", marginBottom: 4, marginTop: '10' }, pdfListBullet: { marginHorizontal: 8 }, pqtext: {fontSize: 12, marginTop: 10}, 
        flexYear: {fontSize: 12, width: '20%'}, flexRole: {fontSize: 12, width: '45%' }, flexOrg: {fontSize: 12, width: '35%' }, flexWork: {fontSize: 12, width: '80%' },
        rowflex: {flexDirection: 'row', justifyContent: 'space-between', gap: '0 10'}, columnflex: {flexDirection: 'column', justifyContent: 'space-between'}
    })

    const ProQua = (pQYear?: string, pQQua?: string, pQSch?: string, pQSpecA?: string, pQSpecB?: string, pQSpecC?: string, pQSpecD?: string, pQSpecE?: string) => {
        return (
            <>
            {pQYear ? <View style={styles.rowflex}><Text style={styles.flexYear}>{pQYear}</Text><Text style={styles.flexRole}>{pQQua}</Text><Text style={styles.flexOrg}>{pQSch}</Text></View> : '' }
            {pQSpecA ? <><View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>Program of Studies:</Text></View>
            <View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>{pQSpecA}</Text></View></> : ''}
            {pQSpecB ? <View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>{pQSpecB}</Text></View>: ''}
            {pQSpecC ? <View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>{pQSpecC}</Text></View>: ''}
            {pQSpecD ? <View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>{pQSpecD}</Text></View>: ''}
            {pQSpecE ? <View style={styles.rowflex}><Text style={styles.flexYear}></Text><Text style={styles.flexWork}>{pQSpecE}</Text></View>: ''}
            </>
        )
    }

    const CareerHist = (cHDate?: string, cHPosition?: string, cHFirm?: string, cHRoleA?: string, cHRoleB?: string, cHRoleC?: string, cHRoleD?: string, cHRoleE?: string, cHRoleF?: string, cHRoleG?: string, cHRoleH?: string) => {
        return (
                <>
                <View style={styles.rowflex}>
                    <Text style={styles.text}>{cHDate}</Text>
                    <Text style={styles.text}>{cHPosition}</Text>
                    <Text style={styles.text}>{cHFirm}</Text>
                </View>
                <View style={styles.columnflex}>
                    {cHRoleA ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{cHRoleA}</Text></View> : ''}
                    {cHRoleB ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{cHRoleB}</Text></View> : ''}
                    {cHRoleC ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{cHRoleC}</Text></View> : ''}
                    {cHRoleD ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{cHRoleD}</Text></View> : ''}
                    {cHRoleE ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{cHRoleE}</Text></View> : ''}
                    {cHRoleF ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{cHRoleF}</Text></View> : ''}
                    {cHRoleG ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{cHRoleG}</Text></View> : ''}
                    {cHRoleH ? <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{cHRoleH}</Text></View> : ''}
                </View>
                </>
        )
    }

    const AS = (as: string) => {
        return (
        <>
            <View style={styles.columnflex}>
                <View style={styles.pdfList}><Text style={styles.pdfListBullet}>&bull;</Text><Text style={styles.text}>{as}</Text></View>
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
                    <Text style={styles.text}>Tel: {obj.tel} | E-mail: {obj.email} | LinkedIn: {obj.linkedIn}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.minorheading}>Personal Profile</Text>
                    <Text style={styles.text}>{obj.personalProfile}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.minorheading}>Professional Qualification</Text>
                {obj.pQ1Qualification ? ProQua(obj.pQ1Year, obj.pQ1Qualification, obj.pQ1School, obj.pQ1SpecializationA, obj.pQ1SpecializationB, obj.pQ1SpecializationC, obj.pQ1SpecializationD, obj.pQ1SpecializationE) : ''}
                {obj.pQ2Qualification ? ProQua(obj.pQ2Year, obj.pQ2Qualification, obj.pQ2School, obj.pQ2SpecializationA, obj.pQ2SpecializationB, obj.pQ2SpecializationC, obj.pQ2SpecializationD, obj.pQ2SpecializationE) : ''}
                {obj.pQ3Qualification ? ProQua(obj.pQ3Year, obj.pQ3Qualification, obj.pQ3School, obj.pQ3SpecializationA, obj.pQ3SpecializationB, obj.pQ3SpecializationC, obj.pQ3SpecializationD, obj.pQ3SpecializationE) : ''}
                {obj.pQ4Qualification ? ProQua(obj.pQ4Year, obj.pQ4Qualification, obj.pQ4School, obj.pQ4SpecializationA, obj.pQ4SpecializationB, obj.pQ4SpecializationC, obj.pQ4SpecializationD, obj.pQ4SpecializationE) : ''}
                {obj.pQ5Qualification ? ProQua(obj.pQ5Year, obj.pQ5Qualification, obj.pQ5School, obj.pQ5SpecializationA, obj.pQ5SpecializationB, obj.pQ5SpecializationC, obj.pQ5SpecializationD, obj.pQ5SpecializationE) : ''}
                {obj.pQ6Qualification ? ProQua(obj.pQ6Year, obj.pQ6Qualification, obj.pQ6School, obj.pQ6SpecializationA, obj.pQ6SpecializationB, obj.pQ6SpecializationC, obj.pQ6SpecializationD, obj.pQ6SpecializationE) : ''}
                </View>
                <View style={styles.section}>
                <Text style={styles.minorheading}>Career History</Text>
                {obj.cH1Position ? CareerHist(obj.cH1Date, obj.cH1Position, obj.cH1Firm, obj.cH1RoleA, obj.cH1RoleB, obj.cH1RoleC, obj.cH1RoleD, obj.cH1RoleE, obj.cH1RoleF, obj.cH1RoleG, obj.cH1RoleH) : ''}
                {obj.cH2Position ? CareerHist(obj.cH2Date, obj.cH2Position, obj.cH2Firm, obj.cH2RoleA, obj.cH2RoleB, obj.cH2RoleC, obj.cH2RoleD, obj.cH2RoleE, obj.cH2RoleF, obj.cH2RoleG, obj.cH2RoleH) : ''}
                {obj.cH3Position ? CareerHist(obj.cH3Date, obj.cH3Position, obj.cH3Firm, obj.cH3RoleA, obj.cH3RoleB, obj.cH3RoleC, obj.cH3RoleD, obj.cH3RoleE, obj.cH3RoleF, obj.cH3RoleG, obj.cH3RoleH) : ''}
                {obj.cH4Position ? CareerHist(obj.cH4Date, obj.cH4Position, obj.cH4Firm, obj.cH4RoleA, obj.cH4RoleB, obj.cH4RoleC, obj.cH4RoleD, obj.cH4RoleE, obj.cH4RoleF, obj.cH4RoleG, obj.cH4RoleH) : ''}
                {obj.cH5Position ? CareerHist(obj.cH5Date, obj.cH5Position, obj.cH5Firm, obj.cH5RoleA, obj.cH5RoleB, obj.cH5RoleC, obj.cH5RoleD, obj.cH5RoleE, obj.cH5RoleF, obj.cH5RoleG, obj.cH5RoleH) : ''}
                {obj.cH6Position ? CareerHist(obj.cH6Date, obj.cH6Position, obj.cH6Firm, obj.cH6RoleA, obj.cH6RoleB, obj.cH6RoleC, obj.cH6RoleD, obj.cH6RoleE, obj.cH6RoleF, obj.cH6RoleG, obj.cH6RoleH) : ''}
                </View>
                <View style={styles.section}>
                    <Text style={styles.text}>{obj.cHBrief}</Text>
                </View>
                <View style={styles.section}>
                <Text style={styles.minorheading}>Additional Skill(s) and Experience(s)</Text>
                {obj.aS1 ? AS(obj.aS1) : ''}
                {obj.aS2 ? AS(obj.aS2) : ''}
                {obj.aS3 ? AS(obj.aS3) : ''}
                {obj.aS4 ? AS(obj.aS4) : ''}
                {obj.aS5 ? AS(obj.aS5) : ''}
                {obj.aS6 ? AS(obj.aS6) : ''}
                {obj.aS7 ? AS(obj.aS7) : ''}
                {obj.aS8 ? AS(obj.aS8) : ''}
                {obj.aS9 ? AS(obj.aS9) : ''}
                {obj.aS10 ? AS(obj.aS10) : ''}
                </View>
            </Page>
        </Document>
    </PDFViewer>)
}

const TcvEngine = () => {
    return(<><TcvPdfBuild {...tcvObj} /></>)
}

export {TcvEngine, TcvPdfBuild};