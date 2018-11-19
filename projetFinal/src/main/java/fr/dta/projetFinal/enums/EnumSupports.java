package fr.dta.projetFinal.enums;

import java.util.ArrayList;
import java.util.List;

public enum EnumSupports
{
	SUPPORT_PC("SUPPORT_PC"),
	SUPPORT_XBOXONE("SUPPORT_XBOXONE"),
	SUPPORT_PS4("SUPPORT_PS4");
	
	private String support;
	private List<String> supports = new ArrayList<String>();
	
	private EnumSupports(String s)
	{
		this.support = s;
		this.supports.add(s);
	}

	public String getSupport()
	{
		return this.support;
	}

	public void setSupport(String support)
	{
		this.support = support;
	}

	public static List<String> getAllSupports()
	{		
		List<String> liste = new ArrayList<String>();

		liste.add(SUPPORT_PC.toString());
		liste.add(SUPPORT_XBOXONE.toString());
		liste.add(SUPPORT_PS4.toString());
		
		return liste;
	}
}