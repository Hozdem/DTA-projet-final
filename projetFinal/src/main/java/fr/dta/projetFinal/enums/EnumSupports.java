package fr.dta.projetFinal.enums;

import java.util.ArrayList;
import java.util.List;

public enum EnumSupports
{
	PC("PC"),
	XBOXONE("XBOXONE"),
	PS4("PS4");
	
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
		List<String> list = new ArrayList<String>();
		for(EnumSupports supports: EnumSupports.values()) {
			list.add(supports.getSupport());
		}
		return list;
	}
}