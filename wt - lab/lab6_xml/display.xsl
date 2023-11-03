<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1>Book List</h1>
                <xsl:for-each select="books/book">
                    <div>
                        <h2><xsl:value-of select="title"/></h2>
                        <p>Author: <xsl:value-of select="author"/></p>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
